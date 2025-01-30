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
