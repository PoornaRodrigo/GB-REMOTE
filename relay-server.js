const WebSocket = require('ws');
const url = require('url');

const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT });

// Active sessions: cleanId -> { host: WebSocket | null, client: WebSocket | null }
const sessions = new Map();

console.log(`GB Remote Relay Server running on port ${PORT}`);

// Heartbeat mechanism to prevent idle timeouts over cloud relays
const interval = setInterval(() => {
    wss.clients.forEach((ws) => {
        if (ws.isAlive === false) {
            return ws.terminate();
        }
        ws.isAlive = false;
        ws.ping();
    });
}, 25000);

wss.on('close', () => {
    clearInterval(interval);
});

wss.on('connection', (ws, req) => {
    ws.isAlive = true;
    ws.on('pong', () => {
        ws.isAlive = true;
    });

    const parameters = url.parse(req.url, true).query;
    const id = parameters.id;
    const role = parameters.role; // 'host' or 'client'

    if (!id || !role) {
        console.log("Rejected connection: Missing ID or role.");
        ws.close();
        return;
    }

    // Standardize ID by removing spaces and dashes
    const cleanId = id.replace(/[\s-]/g, '');

    if (!sessions.has(cleanId)) {
        sessions.set(cleanId, { host: null, client: null });
    }

    const session = sessions.get(cleanId);

    if (role === 'host') {
        if (session.host && session.host !== ws) {
            console.log(`Replacing active host for session ${cleanId}`);
            try { session.host.close(); } catch { }
        }
        session.host = ws;
        console.log(`Host registered for session: ${cleanId}`);

        // Forward messages from host to client
        ws.on('message', (message, isBinary) => {
            if (session.client && session.client.readyState === WebSocket.OPEN) {
                session.client.send(message, { binary: isBinary });
            }
        });

    } else if (role === 'client') {
        if (session.client && session.client !== ws) {
            console.log(`Replacing active client for session ${cleanId}`);
            try { session.client.close(); } catch { }
        }
        session.client = ws;
        console.log(`Client connected for session: ${cleanId}`);

        if (session.host && session.host.readyState === WebSocket.OPEN) {
            console.log(`Bridged host and client for session ${cleanId}`);

            // Forward messages from client to host
            ws.on('message', (message, isBinary) => {
                if (session.host && session.host.readyState === WebSocket.OPEN) {
                    session.host.send(message, { binary: isBinary });
                }
            });
        } else {
            console.log(`Client attempted connection but host is offline: ${cleanId}`);
            ws.send(JSON.stringify({ error: "Host not online" }));
            ws.close();
            return;
        }
    }

    ws.on('error', (err) => {
        console.error(`Socket error on session ${cleanId} (${role}):`, err.message);
    });

    ws.on('close', () => {
        console.log(`${role} disconnected from session: ${cleanId}`);
        if (role === 'host') {
            if (session.client && session.client.readyState === WebSocket.OPEN) {
                session.client.close();
            }
            sessions.delete(cleanId);
        } else if (role === 'client') {
            session.client = null;
            // Notify host or keep host online to wait for next client
            if (session.host && session.host.readyState === WebSocket.OPEN) {
                session.host.close();
                sessions.delete(cleanId);
            }
        }
    });
});
