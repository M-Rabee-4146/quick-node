# quick-node 🚀

A powerful and intuitive CLI tool designed to jumpstart your full-stack development. Quickly scaffold Node.js backend projects with your choice of database, automated dependency installation, and seamless VS Code integration.

---

## ✨ Features

- **Interactive CLI**: Easy-to-use prompts powered by `inquirer`.
- **Backend Variety**: Choose between **MongoDB** (with Mongoose) and **SQLite**.
- **Automated Setup**: Installs dependencies and configures `package.json` automatically.
- **Smart Scaffolding**: Structured files for Controllers, Models, Routes, and Middleware.
- **VS Code Integration**: Automatically opens your newly created project in VS Code.
- **Support for Both**: Option to generate Frontend, Backend, or a complete Full-Stack structure.

---

## 🚀 Getting Started

### Installation

Clone the repository and install the dependencies globally to use the CLI from anywhere:

```bash
# Clone the repository
git clone https://github.com/Muhammad-Rabee/quick-node.git

# Navigate to the directory
cd quick-node

# Install dependencies
npm install

# Link the CLI tool (Optional, to use 'quick-node' command)
npm link
```

### Usage

Simply run the command and follow the prompts:

```bash
quick-node
```

Or run it directly using Node:

```bash
node installer.js
```

---

## 🛠 Project Structure

When you generate a project, you'll get a clean and professional architecture:

### Backend (Express)
- `/controllers`: Logic for handling requests.
- `/models`: Database schemas and configurations.
- `/Routes`: API endpoints definition.
- `/middleware`: Authentication and other request processing.
- `/utils`: Helper functions.
- `.env`: Environment variable configuration.

---

## 📂 Templates Included

### 🍃 MongoDB Template
A robust starter for MongoDB using Mongoose. Includes basic authentication middleware and structured models.

### 💾 SQLite Template
A lightweight and efficient starter using SQLite, perfect for local development and small-scale applications.

---

## 👨‍💻 About the Author

Created by **Muhammad Rabee**. Focused on building tools that simplify the development workflow for modern developers.

---

## 📄 License

This project is licensed under the **ISC License**.
