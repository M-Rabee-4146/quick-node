# rabee-node-cli 🚀

[![npm version](https://img.shields.io/npm/v/rabee-node-cli.svg)](https://www.npmjs.com/package/rabee-node-cli)

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

## 📋 Requirements

Before using this tool, ensure you have the following installed:
- **Node.js**: v16.x or higher (Recommended: Latest LTS)
- **NPM**: v8.x or higher

---

## 🚀 Getting Started

### Installation

#### 📦 Via NPM (Recommended)
Install the tool globally to use it from anywhere:

```bash
npm install -g rabee-node-cli
```

#### 🛠 From Source (Development)
If you want to contribute or run the latest version from source:

```bash
# Clone the repository
git clone https://github.com/M-Rabee-4146/rabee-node-cli.git

# Navigate to the directory
cd rabee-node-cli

# Install dependencies
npm install

# Link the CLI tool
npm link
```

### Usage

Once installed, simply run the command in your terminal:

```bash
rabee-node-cli
```

Or run it directly using Node (if installed from source):

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

## � Changelog

### v1.0.1
- **Fixed**: Project naming consistency across all generated files.
- **Fixed**: Improved error handling for invalid project names (spaces/empty).
- **Added**: Enhanced CLI output with better styling using `chalk`.
- **Improved**: Automated dependency installation reliability.

---

## �📄 License

This project is licensed under the **ISC License**.
