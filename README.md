# 🚀 GB-REMOTE — Free Remote Desktop Software

<p align="center">
  <img src="https://img.shields.io/badge/GB--REMOTE-Remote%20Desktop-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="GB-REMOTE"/>
  <img src="https://img.shields.io/badge/C%23-WPF-512BD4?style=for-the-badge&logo=csharp&logoColor=white" alt="C# WPF"/>
  <img src="https://img.shields.io/badge/.NET-Windows-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Windows-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows"/>
  <img src="https://img.shields.io/badge/Network-WebSocket-4353FF?style=for-the-badge" alt="WebSocket"/>
  <img src="https://img.shields.io/badge/Protocol-WSS%20Secure-success?style=for-the-badge" alt="Secure WebSocket"/>
  <img src="https://img.shields.io/badge/License-Open%20Source-success?style=for-the-badge" alt="Open Source"/>
</p>

<p align="center">
  <b>🖥️ Free • Lightweight • Secure • Fast Remote Access</b>
</p>

<p align="center">
  <i>Remote Access Made Simple.</i>
</p>

<p align="center">
  <a href="#-download">Download</a> •
  <a href="#-features">Features</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-technology-stack">Technology</a>
</p>

---

## 🖥️ About GB-REMOTE

**GB-REMOTE** is a **free, lightweight and secure remote desktop application for Windows**, developed by **Poorna Rodrigo** using **C# / .NET / WPF**.

GB-REMOTE is designed as a modern and simple **UltraViewer alternative** for remote computer access, remote IT support and technical assistance.

The application provides a clean Windows interface with **Connection ID based remote access, secure WebSocket communication, connection history, custom device names and relay-server connectivity**.

### 🎯 Main Goal

The goal of GB-REMOTE is simple:

> **Make remote computer access easy, fast and accessible without complicated setup.**

---

# ✨ Features

### 🖥️ Remote Desktop

Connect to another Windows computer and provide remote technical assistance through a simple connection workflow.

### 🆔 Connection ID

Users can identify remote computers using a simple **Connection ID**, making remote support easier for non-technical users.

### 🔐 Secure WebSocket

GB-REMOTE is designed to communicate through:

```text
wss://
```

Secure WebSocket communication provides encrypted transport between the application and relay infrastructure.

### 🌐 Relay Server

GB-REMOTE uses a:

```text
Client → Relay Server → Client
```

architecture to enable communication between remote clients.

### 🕘 Connection History

Previously connected devices can be stored and accessed through the application's connection history.

### ✏️ Device Rename

Give meaningful names to saved devices.

Example:

```text
Office PC
Main Server
Customer PC
POS Computer
Home PC
```

### ⚡ Lightweight

Designed to provide a fast startup and low resource footprint on Windows systems.

### 🎨 Modern WPF UI

Built using **Windows Presentation Foundation (WPF)** with a modern Windows desktop interface.

### 🆓 Free

GB-REMOTE is designed as a free remote access solution without subscription-based limitations.

---

# 🚀 Why GB-REMOTE?

| Feature               | GB-REMOTE |
| --------------------- | --------- |
| 🆓 Free               | ✅         |
| 🖥️ Windows Support   | ✅         |
| 🔐 Secure WebSocket   | ✅         |
| 🌐 Relay Architecture | ✅         |
| 🆔 Connection ID      | ✅         |
| 🕘 Connection History | ✅         |
| ✏️ Device Rename      | ✅         |
| ⚡ Lightweight         | ✅         |
| 🎨 Modern WPF UI      | ✅         |
| 💻 C# / .NET          | ✅         |
| 🌎 Remote Support     | ✅         |

---

# 📸 Screenshots

> Add your application screenshots inside the `screenshots` folder.

### 🖥️ Main Interface

```text
screenshots/main-window.png
```

### 🔗 Connection Window

### 🕘 Connection History

### ⚙️ Settings

---

# 🎬 Demo

Add a GIF or demo video showing GB-REMOTE connecting to another computer.

```text
screenshots/gb-remote-demo.gif
```

---

# 🏗️ Architecture

GB-REMOTE follows a **Client → Relay → Client** architecture.

```text
                  GB-REMOTE
               Remote Desktop
                     │
                     ▼
          ┌─────────────────────┐
          │   Windows Client    │
          │     C# / WPF        │
          └──────────┬──────────┘
                     │
                     │ Secure WebSocket
                     │
                     ▼
          ┌─────────────────────┐
          │    Relay Server     │
          │     Node.js         │
          │   Cloud / Render    │
          └──────────┬──────────┘
                     │
                     │ Secure WebSocket
                     │
                     ▼
          ┌─────────────────────┐
          │   Remote Client    │
          │     C# / WPF        │
          │      Windows        │
          └─────────────────────┘
```

---

# 🔐 Security

GB-REMOTE uses secure communication through **WebSocket Secure (WSS)**.

### Communication

```text
Client
  │
  │ TLS / WSS
  ▼
Relay Server
  │
  │ TLS / WSS
  ▼
Remote Client
```

### Security Goals

* 🔒 Encrypted network transport
* 🔐 Secure WebSocket communication
* 🆔 Connection identification
* 🌐 Relay-based communication
* 🛡️ Secure remote support architecture

> ⚠️ **Important:** Always use GB-REMOTE only on computers and networks where you have permission to provide or receive remote access.

---

# 🛠️ Technology Stack

## 💻 Desktop Application

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| 🔷 C#      | Application development         |
| 🟣 .NET    | Runtime & application framework |
| 🪟 WPF     | Windows desktop UI              |
| 🎨 XAML    | User interface design           |

## 🌐 Networking

| Technology   | Purpose                              |
| ------------ | ------------------------------------ |
| 🔌 WebSocket | Real-time communication              |
| 🔐 WSS       | Secure WebSocket communication       |
| 🟢 Node.js   | Relay server                         |
| ☁️ Render    | Cloud hosting / relay infrastructure |

---

# 📦 Project Structure

```text
GB-REMOTE/
│
├── 📁 GB-REMOTE/
│   ├── App.xaml
│   ├── MainWindow.xaml
│   ├── MainWindow.xaml.cs
│   ├── 📁 Views/
│   ├── 📁 Models/
│   ├── 📁 Services/
│   ├── 📁 Networking/
│   └── 📁 Resources/
│
├── 📁 Relay-Server/
│   ├── server.js
│   ├── package.json
│   └── 📁 src/
│
├── 📁 screenshots/
│   ├── main-window.png
│   ├── connection.png
│   ├── history.png
│   ├── settings.png
│   └── gb-remote-demo.gif
│
├── 📄 README.md
├── 📄 LICENSE
└── 📄 .gitignore
```

---

# 📥 Download

## ⭐ Latest Release

<p align="center">

<a href="../../releases/latest">
<img src="https://img.shields.io/badge/⬇️%20DOWNLOAD%20GB--REMOTE-Latest%20Release-00C853?style=for-the-badge" alt="Download GB-REMOTE"/>
</a>

</p>

Download the latest Windows installer or executable from the **GitHub Releases** page.

### Available Packages

```text
GB-REMOTE-Setup.exe
GB-REMOTE-Setup.zip
```

---

# 💿 Installation

### Step 1 — Download

Download the latest release from:

```text
GitHub → Releases → Latest Release
```

### Step 2 — Install

Run:

```text
GB-REMOTE-Setup.exe
```

or extract:

```text
GB-REMOTE-Setup.zip
```

### Step 3 — Launch

Open:

```text
GB-REMOTE.exe
```

### Step 4 — Connect

Enter the required **Connection ID** and start the remote session.

---

# 🚀 Quick Start

```text
┌───────────────────────────┐
│     Install GB-REMOTE     │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│      Open Application     │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│     Get Connection ID     │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│ Enter Remote Connection ID│
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│      Start Session        │
└───────────────────────────┘
```

---

# 🧑‍💻 Use Cases

GB-REMOTE can be useful for:

* 🧑‍💻 IT Technicians
* 🖥️ Computer Technicians
* 🔧 Remote Technical Support
* 💼 Software Support Teams
* 🏢 Business IT Support
* 🖨️ Printer Support
* 🛒 POS System Support
* 🌐 Network Support
* 💻 Remote PC Troubleshooting
* 🏠 Remote Computer Assistance

---

# 🖥️ Example Remote Support Workflow

```text
Customer
   │
   │ Provides Connection ID
   ▼
IT Technician
   │
   │ Enters Connection ID
   ▼
GB-REMOTE Relay
   │
   │ Secure WebSocket
   ▼
Customer Computer
   │
   ▼
Remote Support Session
```

---

# ⚙️ Technical Specifications

| Specification       | Details                         |
| ------------------- | ------------------------------- |
| 👨‍💻 Developer     | Poorna Rodrigo                  |
| 📦 Project          | GB-REMOTE                       |
| 💻 Language         | C#                              |
| 🪟 Framework        | .NET / WPF                      |
| 🎨 UI               | XAML / WPF                      |
| 🌐 Protocol         | WebSocket                       |
| 🔐 Secure Protocol  | WSS                             |
| 🏗️ Architecture    | Client → Relay → Client         |
| 🟢 Relay Server     | Node.js                         |
| ☁️ Hosting          | Render / Custom Server          |
| 🖥️ Platform        | Windows                         |
| 🎯 Application Type | Remote Desktop / Remote Support |

---

# 🆚 GB-REMOTE as an UltraViewer Alternative

GB-REMOTE is intended for users searching for a simple and lightweight **UltraViewer alternative**.

It focuses on:

```text
Simple UI
    +
Connection ID
    +
Secure WebSocket
    +
Relay Server
    +
Remote Support
    +
Connection History
```

This makes GB-REMOTE suitable for personal remote access, IT support and technical assistance.

---

# 🗺️ Roadmap

### ✅ Completed

* [x] C# WPF desktop application
* [x] Remote connection system
* [x] Connection ID
* [x] WebSocket communication
* [x] Secure WSS support
* [x] Relay architecture
* [x] Connection history
* [x] Device renaming
* [x] Windows support

### 🚧 In Development

* [ ] File transfer
* [ ] Clipboard synchronization
* [ ] Better connection security
* [ ] Performance improvements
* [ ] Multi-monitor support
* [ ] Remote keyboard & mouse improvements
* [ ] Automatic updates
* [ ] Improved relay infrastructure

### 🔮 Future

* [ ] Android client
* [ ] macOS client
* [ ] Linux client
* [ ] Voice communication
* [ ] Session recording
* [ ] Advanced administrator controls

---

# 🐛 Bug Reports & Feature Requests

Found a bug?

Please create a **GitHub Issue** with:

```text
1. Operating System
2. GB-REMOTE Version
3. What happened?
4. What did you expect?
5. Steps to reproduce
6. Screenshots / logs if available
```

For feature requests, describe:

```text
Feature:
Why it is useful:
Expected behaviour:
```

---

# 🤝 Contributing

Contributions are welcome!

```text
Fork
  ↓
Clone
  ↓
Create Branch
  ↓
Make Changes
  ↓
Test
  ↓
Commit
  ↓
Push
  ↓
Pull Request
```

Example:

```bash
git clone https://github.com/YOUR-USERNAME/GB-REMOTE.git

cd GB-REMOTE

git checkout -b feature/my-new-feature
```

Then submit a Pull Request.

---

# ⭐ Support GB-REMOTE

If you like this project, you can help by:

⭐ **Starring the repository**

🍴 **Forking the project**

🐛 **Reporting bugs**

💡 **Suggesting features**

🔧 **Contributing code**

📢 **Sharing the project**

---

# 👨‍💻 Developer

## Poorna Rodrigo

**IT Technician • C# Developer • WPF Developer • Web Developer**

GB-REMOTE is developed by **Poorna Rodrigo**, focusing on practical software solutions, Windows applications, IT support tools, networking and business software development.

### 💻 Skills

```text
C#
.NET
WPF
XAML
SQL
JavaScript
HTML
CSS
Bootstrap
Networking
Windows Applications
Web Applications
IT Support
```

---

# 🔗 Connect With Poorna Rodrigo

<p align="center">

<a href="https://lk.linkedin.com/in/poorna-rodrigo-38a692301">
<img src="https://img.shields.io/badge/LinkedIn-Poorna%20Rodrigo-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Poorna Rodrigo LinkedIn"/>
</a>

</p>

---

# 📊 Project Keywords

**GB-REMOTE** • **GB Remote** • **GBREMOTE** • **GB-REMOTE Remote Desktop** • **Free Remote Desktop** • **Remote Desktop Software** • **Remote Access Software** • **Windows Remote Desktop** • **Windows Remote Access** • **Remote Computer Access** • **Remote Support Software** • **IT Remote Support** • **Free Remote Access** • **UltraViewer Alternative** • **Free UltraViewer Alternative** • **TeamViewer Alternative** • **Remote PC Software** • **C# Remote Desktop** • **C# WPF Remote Desktop** • **WPF Remote Desktop Application** • **C# Remote Access Software** • **WebSocket Remote Desktop** • **Secure WebSocket Remote Access** • **WSS Remote Desktop** • **Windows Remote Support** • **IT Support Software** • **Remote IT Support Tool** • **Open Source Remote Desktop** • **Free Windows Remote Desktop** • **Poorna Rodrigo** • **Poorna C# Developer** • **GB Remote C#** • **GB Remote WPF**

---

# 🏷️ SEO Tags

```text
#GBREMOTE
#GBRemote
#RemoteDesktop
#RemoteAccess
#RemoteSupport
#RemoteDesktopSoftware
#FreeRemoteDesktop
#FreeRemoteAccess
#WindowsRemoteDesktop
#WindowsRemoteAccess
#UltraViewerAlternative
#FreeUltraViewerAlternative
#TeamViewerAlternative
#RemotePC
#RemoteSupportSoftware
#ITSupport
#ITTechnician
#CSharp
#CSharpDeveloper
#CSharpWPF
#WPF
#DotNet
#XAML
#WebSocket
#SecureWebSocket
#WSS
#NodeJS
#OpenSource
#WindowsApplication
#RemoteITSupport
#PoornaRodrigo
#GBRemoteCSharp
#GBRemoteWPF
```

---

# 🔎 Search Engine Description

**GB-REMOTE is a free and lightweight UltraViewer alternative for Windows, built with C#, .NET and WPF. It provides secure WebSocket remote desktop connectivity, Connection ID based access, connection history, device renaming and relay-server architecture for remote IT support and computer access. Developed by Poorna Rodrigo.**

---

# 🏆 Project Highlights

<p align="center">

<img src="https://img.shields.io/badge/🆓%20FREE-100%25-success?style=for-the-badge" />
<img src="https://img.shields.io/badge/⚡%20FAST-Lightweight-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/🔐%20SECURE-WSS-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/🖥️%20PLATFORM-Windows-0078D4?style=for-the-badge" />

</p>

---

# 📜 License

This project is released as **Open Source**.

See the `LICENSE` file for complete license information.

---

# ❤️ Final Message

<p align="center">

## 🚀 GB-REMOTE

### Remote Access Made Simple.

**Free • Lightweight • Secure • Fast**

Built with ❤️ using

**C# + .NET + WPF + WebSocket**

### 👨‍💻 Developed by Poorna Rodrigo

<a href="https://lk.linkedin.com/in/poorna-rodrigo-38a692301">
Connect with Poorna Rodrigo on LinkedIn
</a>

</p>

---

<p align="center">
  <sub>GB-REMOTE — Free Remote Desktop Software for Windows</sub>
</p>

