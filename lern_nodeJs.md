# Node.js Basics

## What is Node.js?
- Node.js is a JavaScript runtime that allows you to run JavaScript outside the browser.
- It is used for building backend applications.

---
### What is npm init?
- npm stands for Node Package Manager.
- npm init is a command used to create a new Node.js project.
- It sets up a file called package.json that stores important information about your project, like its name, version, and dependencies.

```
npm init
npm init -y
```
- `-y` use for skip the below Questions.
## Answer the Questions

It will ask you several questions:

- `package name:` (Name of your project, e.g., "my-app")
- `version:` (Default is "1.0.0")
- `description:` (A short description of your project)
- `entry point:` (The main file of your project, usually `index.js`)
- `author:` (Your name)

You can press **Enter** to accept the default values or type your own.
--- 
## Install Modules

To install a module, use the following command:

```bash
npm install <module_name>
```

Example:

```bash
npm install slugify
```
The `slugify` package is used to convert strings into URL-friendly slugs. Slugs are typically lowercase, with spaces replaced by dashes.


## Simple HTTP Server Example

```javascript
const http = require("http"); // Corrected module name

const hostname = '127.0.0.1'; // Localhost address
const port = 3000; // Port where the server will run

// Create the HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code for "OK"
    res.setHeader('Content-Type', 'text/plain'); // Set the content type
    res.end('Hello, world!'); // Send the response
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Using `nodemon`

### Install Nodemon Globally
To install `nodemon` globally, use the following command:
```bash
npm i --global nodemon
```

### What is Nodemon?
- `nodemon` is a utility that monitors for changes in your Node.js application and automatically restarts the server when a file changes.
- This is especially useful during development to avoid manually restarting the server each time you make changes.

### How to Use Nodemon
- Start your server using `nodemon` instead of `node`:
```bash
nodemon <filename>
```

Example:
```bash
nodemon index.js
```

### Benefits
- Automatically restarts the server when changes are detected.
- Saves time during development.
--- 
## `type` in `package.json`

The `type` key in `package.json` determines how JavaScript files are treated:

- **`"type": "module"`**: Treats `.js` files as **ES Modules** (use `import`/`export`).
- Example:
    ```json
    {
      "type": "module"
    }
    ```
    ```js
    // example.mjs
    import { myFunction } from './myModule.js';
    ```
- **`"type": "commonjs"`**: Treats `.js` files as **CommonJS modules** (use `require()`/`module.exports`).
 - Example:
    ```json
    {
      "type": "commonjs"
    }
    ```
    ```js
    // example.js
    const myFunction = require('./myModule');
    module.exports = myFunction;
    ```

If not specified, the default is `"type": "commonjs"`.

#### Key Points:
- **ES Modules**: Use `import`/`export`.
- **CommonJS Modules**: Use `require()`/`module.exports`.
- You can use `.mjs` for ES Modules and `.cjs` for CommonJS if needed.

### ES Modules (with `"type": "module"`):
```js
// myModule.js
const myFunction = () => {
  console.log('Hello from myFunction!');
};

export default myFunction;  // Default export
```

```js
// main.js
import myFunction from './myModule.js';  // Import default export
myFunction();
```

### CommonJS (with `"type": "commonjs"`):
```js
// myModule.js
const myFunction = () => {
  console.log('Hello from myFunction!');
};

module.exports = myFunction;  // Default export
```

```js
// main.js
const myFunction = require('./myModule.js');  // Import default export
myFunction();
```

In both cases, `myFunction` is exported as the default from `myModule.js` and imported into `main.js`.

---
### Node.js Special Variables and Module Wrapping
```
(function(exports, require, module, __filename, __dirname) {
  // Module code actually lives here
  // Code lives here
});

```
In Node.js, when you create a module, your code is automatically **wrapped** in a function by Node.js. This wrapping gives your code access to special variables like **`exports`**, **`require`**, **`module`**, **`__filename`**, and **`__dirname`**. This allows you to export functionality, import modules, and work with file paths without manually setting up these variables.


## Study Notes on FS Module and Promises in JavaScript

## Overview
- The **FS (File System)** module in Node.js is used for file operations.
- Learn how to read and write files using **synchronous** and **asynchronous** methods.

---

## Key Points

### FS Module
- **Import the FS module:**
  ```javascript
  const fs = require('fs');
  ```

#### File Creation:
- **Synchronous (Blocking):**
  ```javascript
  fs.writeFileSync('filename.txt', 'content');
  ```
  Blocks execution until the file is written.

- **Asynchronous (Non-Blocking):**
  ```javascript
  fs.writeFile('filename.txt', 'content', (err) => {
    if (err) throw err;
    console.log('File written!');
  });
  ```
  Uses a callback to handle the file operation.

---

### Synchronous vs Asynchronous
- **Synchronous:** Stops code execution until the operation finishes.
- **Asynchronous:** Executes operations in the background, allowing other code to run.

---

### Callback Hell
- Multiple nested callbacks can make code messy and hard to read.
- Example: Writing and reading multiple files in sequence using callbacks.

---

### Using Promises
- The **`fs.promises`** API provides a cleaner way to handle file operations:
  ```javascript
  const fs = require('fs').promises;

  async function fileOperations() {
    await fs.writeFile('filename.txt', 'content');
    const data = await fs.readFile('filename.txt', 'utf8');
    console.log(data);
  }

  fileOperations();
  ```

---

## Path Module
- **Import the Path module:**
  ```javascript
  const path = require('path');
  ```

#### Useful Functions:
- **`path.resolve()`**: Resolves a sequence of paths into an absolute path.
- **`path.join()`**: Joins multiple path segments into one.

---

## Practical Tips
1. **Error Handling:** Always handle errors in asynchronous operations using callbacks, `try/catch`, or `.catch()` with promises.
2. **Avoid Callback Hell:** Use promises or `async/await` for cleaner and more readable code.

---


