# React

## why React?
-  we can use states which means once we update the state veriable, it changes across the page.
- we can split our app into multiple components and reuse that components.
- react uses a virtual dom to efficiently update  the UI which is betten then updating content using DOM manipulation
- Debugging and maintainance is easy

---

### 🚀 How to Install React and Start a Project  

To install React, follow these simple steps:  

---

### ✅ 1️⃣ Install Node.js (if not installed)  
React requires **Node.js** because it includes **npm (Node Package Manager)** to install dependencies.  

🔹 Download and install Node.js from here 👉 [https://nodejs.org/](https://nodejs.org/)  
🔹 After installation, check the version:  
```sh
node -v   # Check Node.js version
npm -v    # Check npm version
```
If you see version numbers, Node.js is installed correctly! ✅  

---

### ✅ 2️⃣ Create a New React App  
Now, open your **terminal/command prompt** and run:  

```sh
npx create-react-app my-app
```
🔹 `npx` is a package runner that comes with Node.js.  
🔹 `create-react-app` is a tool that sets up everything automatically.  
🔹 `my-app` is the name of your project (you can change it).  

This will take a few minutes to install all necessary files.  

---

### ✅ 3️⃣ Navigate to Your Project  
```sh
cd my-app
```

---

### ✅ 4️⃣ Start the React App  
Run the following command:  
```sh
npm start
```
🔹 This will open **http://localhost:3000/** in your browser.  
🔹 You should see a default React welcome page! 🎉  

---

### ✅ 5️⃣ Open the Code in a Code Editor  
I recommend using **VS Code** for editing your project.  
1. Open **VS Code**  
2. Click **File > Open Folder**  
3. Select your **my-app** folder  

Now, you're ready to start coding in React! 🚀  

---

### 🔥 Bonus: Using Vite for Faster Setup (Alternative)  
For a **faster** React setup, use **Vite** instead of Create React App:  

```sh
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```
This will start the React app much faster! ⚡

### 📂 `App.jsx` in Vite + React  

When you create a React app using **Vite**, the main file you'll work with is `App.jsx`. This file is the **root component** of your React application.  

---

### ✅ **Location of `App.jsx`**
After setting up your Vite + React project, you'll find `App.jsx` inside the `src` folder:  

```
my-app/
│── src/
│   │── App.jsx  👈 Main React component
│   │── main.jsx 👈 Entry point of the app
│   │── index.css 👈 Global styles
```

---

### ✅ **Default Code in `App.jsx`**
When you create a Vite project, the default `App.jsx` file looks like this:  

```jsx
function App() {
  return (
    <>
      <h1>Hello, Vite + React! 🚀</h1>
      <p>Welcome to your first React app using Vite.</p>
    </>
  );
}

export default App;
```

---

### ✅ **What Does This Code Do?**  

1️⃣ **Defines a Component (`App`)**  
   - `function App() { ... }` is a **React component** that returns JSX (like HTML).  

2️⃣ **Uses JSX (`<> ... </>`)**  
   - The `<> ... </>` is called a **fragment**, allowing us to return multiple elements **without adding an extra `<div>`**.  

3️⃣ **Exports the Component (`export default App;`)**  
   - This allows `App.jsx` to be used in other files, especially in `main.jsx`.  

---
### 📂 **Vite + React Project Folder Structure**  

When you create a React app using **Vite**, it generates a clean and efficient folder structure. Below is the **default layout** of a Vite + React project:  

```
my-app/        📁  # Root project folder
│── node_modules/  📁  # Contains installed dependencies (auto-generated)
│── public/        📁  # Static files like favicon, images
│   ├── vite.svg   🖼️  # Vite logo
│   ├── robots.txt 🤖  # Tells search engines how to crawl your site
│── src/           📁  # Main source code folder (where React components live)
│   ├── assets/    📁  # Place for images, icons, and styles
│   ├── App.jsx    📄  # Main React component
│   ├── main.jsx   📄  # Entry point (renders App.jsx)
│   ├── index.css  🎨  # Global styles
│── .gitignore     📄  # Files to ignore in Git commits
│── index.html     📄  # Main HTML file (React is injected here)
│── package.json   📄  # Project metadata & dependencies
│── vite.config.js 📄  # Vite configuration settings
│── README.md      📄  # Project documentation
```

---

### 📌 **Folder & File Descriptions**  

| 📂 Folder/File  | 🔍 Description |
|----------------|--------------|
| `node_modules/` | Stores all installed **npm** packages (auto-generated). |
| `public/` | Contains **static files** (images, favicons, etc.). |
| `src/` | The **main working directory** where all React code exists. |
| `src/assets/` | Stores assets like images, icons, and extra CSS files. |
| `src/App.jsx` | The **main React component** where the app starts. |
| `src/main.jsx` | The **entry point** that mounts React into the HTML file. |
| `src/index.css` | The **global CSS file** for styling the app. |
| `.gitignore` | Lists files to ignore in Git repositories. |
| `index.html` | The base HTML file where React is injected. |
| `package.json` | Contains project **dependencies and scripts**. |
| `vite.config.js` | Configurations for **Vite** (optional but useful). |

---

### ✅ **How React Renders in Vite**
1️⃣ **The browser loads** `index.html`  
2️⃣ `index.html` contains:
   ```html
   <div id="root"></div>
   ```
3️⃣ `main.jsx` injects React into this `root` div:
   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App.jsx'; 

   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```
4️⃣ **`App.jsx`** renders the actual UI of the app.

---

### 🎯 **Where to Write Your Code?**
✅ **Create new components** inside `src/` (e.g., `src/components/`).  
✅ **Store images and styles** inside `src/assets/`.  
✅ **Modify App.jsx** to build your UI.  

---

### Understanding React Components  

React components are **reusable building blocks** of a React application. They allow you to split the UI into smaller, manageable pieces.  

---

## 1. **What is a Component?**  
A component in React is a **JavaScript function** that **returns JSX (HTML-like syntax)**.  

### Example: **Navbar Component (Navbar.jsx)**
This component represents a navigation bar.

#### `src/components/Navbar.jsx`
```jsx
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
```

### Explanation
- The function `Navbar` **returns JSX** containing a navigation menu.  
- `export default Navbar;` makes this component available for use in other files.  
- This component can now be used like a custom HTML tag: `<Navbar />`.  

---

## 2. **Using the Navbar Component in App.jsx**
The `App.jsx` file imports and uses the `Navbar` component.

#### `src/App.jsx`
```jsx
import React from "react";  
import Navbar from "./components/Navbar";  

function App() {
  return (
    <>
      <Navbar />  
    </>
  );
}

export default App;
```

### Explanation
- The `import Navbar from "./components/Navbar";` statement brings in the `Navbar` component.  
- `<Navbar />` is used inside the `return()` function to display the navigation bar.  
- `App.jsx` serves as the main component that renders everything in the application.  

---

## 3. **Why Use Components?**  
- **Reusability**: Write once, use multiple times.  
- **Code Organization**: Keeps the UI modular and easy to manage.  
- **Scalability**: Makes it easier to add new features without rewriting existing code.  

---

## **Understanding Props in React**  

#### **1. What are Props?**  
Props (short for **"properties"**) are used to **pass data** from **one component to another** in React. They help make components **reusable** and **dynamic**.  

---

#### **2. How Props Work?**  
Props work like **function arguments**. They allow you to pass values from a **parent component** to a **child component**.

##### **Example: Passing Props**
In your code, the `App` component **passes props** (`title` and `description`) to the `Card` component.

#### 📌 **App.jsx (Parent Component)**
```jsx
import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <Card title="Card 1" description="This is card 1." />
      <Card title="Card 2" description="This is card 2." />
      <Card title="Card 3" description="This is card 3." />
    </div>
  );
}

export default App;
```
- Here, `title="Card 1"` and `description="This is card 1."` are **props** being passed to the `Card` component.

---

#### 📌 **Card.jsx (Child Component)**
```jsx
import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
```
- The **`props` parameter** receives the values from `App.jsx`.  
- `{props.title}` and `{props.description}` **display** the passed values inside the component.

---

#### **3. Why Use Props?**
✅ **Reusability** → One component, multiple different uses.  
✅ **Dynamic Content** → Display different data without rewriting components.  
✅ **Parent-Child Communication** → Helps pass data from a parent to a child component.  

 