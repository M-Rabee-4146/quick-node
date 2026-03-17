# rabee-node-cli 🚀
 
[![npm version](https://img.shields.io/npm/v/rabee-node-cli.svg)](https://www.npmjs.com/package/rabee-node-cli)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A powerful and intuitive CLI tool designed to jumpstart your full-stack development. **rabee-node-cli** scaffolds structured Node.js backend projects and React Redux frontend applications with a premium, high-contrast design.

---

## 🚀 Quick Start

### Global Installation (Recommended)
Install the tool globally to jump into development from anywhere:

```bash
npm install -g rabee-node-cli
```

### Usage
Simply run the command in your terminal and follow the interactive prompts:

```bash
start-rncli
```

---

## ✨ Features

- **Interactive CLI**: Easy-to-use prompts powered by `inquirer`.
- **Smart Connectivity**: Automatically detects internet availability to handle dependency installation gracefully.
- **Enhanced UX**: Real-time progress feedback using smooth terminal spinners.
- **Pre-Configured Templates**:
    - **Frontend**: React + Redux + Tailwind CSS with premium **NPM-style branding**.
    - **Backend**: Choose between **MongoDB** (with Mongoose) and **SQLite**.
- **Automated Setup**: Installs dependencies and configures `package.json` automatically.
- **Smart Scaffolding**: Clean architecture for Controllers, Models, Routes, and Middleware.
- **Authentication Ready**: Includes pre-built login/signup logic and security middleware.
- **VS Code Integration**: Automatically opens your newly created project in VS Code.

---

## 🛠 For Developers (From Source)

If you want to contribute or run the latest version directly from source:

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

---

## 📋 Requirements

Before using this tool, ensure you have the following installed:
- **Node.js**: v18.x or higher
- **NPM**: v9.x or higher

---

## 📂 Project Structure

When you generate a project, you'll get a professional, production-ready architecture:

### ⚛️ Frontend (React & Redux)
- `/src/Redux`: Full state management setup with Redux Toolkit and persistence.
- `/src/pages`: Responsive Login, Signup, and Dashboard templates.
- `/src/components`: Reusable UI components (Loading, Modal, etc.).
- **Theme**: Premium High-Contrast (Red/White/Black) visuals.

### 🌐 Backend (Express)
- `/controllers`: Request handling logic.
- `/models`: Database schemas.
- `/Routes`: API endpoint definitions.
- `/middleware`: JWT authentication and security guards.
- `.env`: Pre-configured environment variables.

---

## 🛠 Templates Included

### 🍃 MongoDB Template
A robust starter for MongoDB using Mongoose. Includes basic authentication middleware and structured models.

### 💾 SQLite Template
A lightweight and efficient starter using SQLite, perfect for local development and small-scale applications.

### 🎨 React Redux Frontend
A sleek, modern frontend template with a focused Authentication flow. Features a compact, single-screen Dashboard optimized for rapid development.

---

## 👨‍💻 About the Author

Created by **Muhammad Rabee**. Dedicated to building tools that simplify the modern development workflow.

---

## 📜 Changelog

### v2.1.0 (Current)
- **New Feature**: Added Premium React Redux Frontend template.
- **Improved UI**: Applied NPM-inspired branding (Red/White/Black) across all frontend components.
- **Refactoring**: Simplified Authentication flow and removed legacy POS components.
- **Optimization**: Converted Dashboard to a compact, single-screen UI.
- **Command Update**: Main CLI command updated to `start-rncli`.

---

## 📄 License

This project is licensed under the **ISC License**.
