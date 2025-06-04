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

## **Understanding `useEffect` in React**  

`useEffect` is a **React Hook** that lets you **run code when a component is rendered or updated**. It is mainly used for:  
- Fetching data from an API  
- Updating the DOM  
- Handling side effects like timers or event listeners  

---

## **1. Basic Syntax of `useEffect`**  
To use `useEffect`, first **import it** from React:  
```jsx
import { useEffect } from "react";
```
Then, use it inside your component:  
```jsx
useEffect(() => {
  // Code to run when the component renders or updates
});
```

---

## **2. Example: Running Code on Every Render**  
The code inside `useEffect` runs **every time the component renders**.  
```jsx
import { useEffect } from "react";

const Example = () => {
  useEffect(() => {
    console.log("Component rendered");
  });

  return <h1>Hello, World!</h1>;
};

export default Example;
```
**Explanation:**  
- Every time the component renders, `"Component rendered"` is printed in the console.  
- This can cause performance issues if not controlled properly.  

---

## **3. Running `useEffect` Only Once (on First Render)**  
If you want `useEffect` to run **only once when the component loads**, add an **empty dependency array (`[]`)**.  
```jsx
import { useEffect } from "react";

const Example = () => {
  useEffect(() => {
    console.log("This runs only once");
  }, []);

  return <h1>Hello, World!</h1>;
};

export default Example;
```
**Explanation:**  
- `useEffect` runs **only once** when the component is first rendered.  
- This is useful for **fetching data from an API** or setting up event listeners.  

---

## **4. Running `useEffect` When a State or Prop Changes**  
You can make `useEffect` run **only when a specific value changes** by adding it to the **dependency array**.  
```jsx
import { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]); // Runs when 'count' changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Example;
```
**Explanation:**  
- `useEffect` runs **only when `count` changes**.  
- Every time you click the button, `"Count changed to: X"` is printed in the console.  

---

## **5. Cleaning Up Effects**  
Some effects (like event listeners or timers) **need cleanup** to avoid memory leaks.  
Use `return () => {}` inside `useEffect` for cleanup.  

```jsx
import { useEffect } from "react";

const Example = () => {
  useEffect(() => {
    console.log("Effect started");

    return () => {
      console.log("Effect cleaned up");
    };
  }, []);

  return <h1>Hello, World!</h1>;
};

export default Example;
```
**Explanation:**  
- When the component **mounts**, `"Effect started"` is logged.  
- When the component **unmounts**, `"Effect cleaned up"` is logged.  

---

## **Summary**  
- `useEffect(() => {})` runs **on every render**.  
- `useEffect(() => {}, [])` runs **only on the first render**.  
- `useEffect(() => {}, [value])` runs **when `value` changes**.  
- `return () => {}` inside `useEffect` **cleans up effects** when the component unmounts.  

## **Conditional Rendering & Rendering Lists in React**  

In React, **Conditional Rendering** allows us to show or hide elements based on conditions, while **Rendering Lists** helps display multiple items dynamically.  

---

## **1. Conditional Rendering**  

Conditional rendering means **showing different UI elements based on a condition**.  

### **Example 1: Simple Conditional Rendering (`if-else`)**  
```jsx
import React, { useState } from "react";

const UserStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h2>Welcome, User!</h2> : <h2>Please log in</h2>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default UserStatus;
```

### **Explanation:**  
1. **If `isLoggedIn` is `true`**, it shows **"Welcome, User!"**.  
2. **If `isLoggedIn` is `false`**, it shows **"Please log in"**.  
3. **Button toggles the state** between `Login` and `Logout`.  

---

### **Example 2: Using `&&` (Short Circuit) for Conditional Rendering**  
```jsx
const Message = ({ hasMessages }) => {
  return <>{hasMessages && <p>You have new messages!</p>}</>;
};
```
- If `hasMessages` is `true`, it displays `"You have new messages!"`.  
- If `false`, **nothing** is rendered.  

---

## **2. Rendering Lists**  

When displaying multiple items dynamically, **use `.map()` to loop over an array** and render elements.  

### **Example 1: Rendering a List of Names**  
```jsx
const NameList = () => {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default NameList;
```
### **Explanation:**  
1. The `names` array stores a list of names.  
2. **`.map()` loops over the array** and creates `<li>` elements.  
3. **Each item gets a unique `key` (`index`)** to avoid React warnings.  

---

### **Example 2: Rendering a List of Objects (Users List)**  
```jsx
const UsersList = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
```
### **Why Use `key`?**  
- **Helps React identify items** when the list updates.  
- **Prevents unnecessary re-renders**.  
- **Must be unique** (use `id` instead of `index` when possible).  

---

## **Combining Conditional Rendering & List Rendering**  

### **Example: Show List Only If There Are Items**  
```jsx
const FruitsList = () => {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      {fruits.length > 0 ? (
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      ) : (
        <p>No fruits available.</p>
      )}
    </div>
  );
};

export default FruitsList;
```
### **Explanation:**  
1. **If `fruits.length > 0`**, it displays the list.  
2. **If `fruits` is empty**, it shows `"No fruits available."`  

---

## **Summary**  
✅ **Conditional Rendering:** Show/hide elements using `if`, `? :`, and `&&`.  
✅ **Rendering Lists:** Use `.map()` to loop through arrays and render items.  
✅ **Use `key` prop** to prevent React warnings and improve performance.  

## **Handling Events in React**  

React handles events similarly to HTML, but with some differences:  
1. **React uses camelCase** for event names (e.g., `onClick` instead of `onclick`).  
2. **Events are passed as functions** instead of strings (e.g., `onClick={handleClick}` instead of `onClick="handleClick()"`).  

---

## **1. Handling Click Events**  
A simple example of handling a button click:  

```jsx
import React, { useState } from "react";

const ClickHandler = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickHandler;
```
### **Explanation:**  
- **`handleClick` updates the state (`count`) when clicked.**  
- **Event handler (`onClick={handleClick}`) is passed as a function.**  

---

## **2. Handling Input Events (`onChange`)**  
Handling text input changes:  

```jsx
import React, { useState } from "react";

const InputHandler = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Typed: {text}</p>
    </div>
  );
};

export default InputHandler;
```
### **Explanation:**  
- **`onChange` triggers `handleChange`** whenever text is typed.  
- **`event.target.value` updates `text` state dynamically.**  

---

## **3. Handling Form Submit (`onSubmit`)**  
Handling form submission:  

```jsx
import React, { useState } from "react";

const FormHandler = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandler;
```
### **Explanation:**  
- **Prevents default form submission (`event.preventDefault()`).**  
- **Updates state (`name`) dynamically as user types.**  
- **Displays alert message on form submit.**  

---

## **4. Handling Keyboard Events (`onKeyDown`)**  
Detect key presses:  

```jsx
import React, { useState } from "react";

const KeyPressHandler = () => {
  const [key, setKey] = useState("");

  const handleKeyDown = (event) => {
    setKey(event.key);
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type something" />
      <p>Last Key Pressed: {key}</p>
    </div>
  );
};

export default KeyPressHandler;
```
### **Explanation:**  
- **`onKeyDown` detects key presses.**  
- **`event.key` captures which key was pressed.**  

---

## **5. Handling Mouse Events (`onMouseEnter`, `onMouseLeave`)**  
Handling hover effects:  

```jsx
import React, { useState } from "react";

const HoverHandler = () => {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Hover over me
      </button>
      {hover && <p>You're hovering!</p>}
    </div>
  );
};

export default HoverHandler;
```
### **Explanation:**  
- **`onMouseEnter` sets `hover` to `true`.**  
- **`onMouseLeave` sets `hover` to `false`.**  

---

## **6. Passing Arguments to Event Handlers**  
You can pass arguments using an arrow function:  

```jsx
const handleClick = (name) => {
  alert(`Hello, ${name}!`);
};

// Usage in JSX
<button onClick={() => handleClick("Alice")}>Click Me</button>
```
### **Why Use an Arrow Function?**  
- **Without `()`, the function would execute immediately.**  
- **Using `() => handleClick("Alice")` ensures it runs only when clicked.**  

---

## **Summary**  
✅ **Click Events:** `onClick` for buttons.  
✅ **Input Events:** `onChange` for text inputs.  
✅ **Form Events:** `onSubmit` to handle form submissions.  
✅ **Keyboard Events:** `onKeyDown` to detect key presses.  
✅ **Mouse Events:** `onMouseEnter` / `onMouseLeave` for hover effects.  
✅ **Passing Arguments:** Use arrow functions to pass parameters.  

---

### 🚦 What is a Router in React?

A **Router** in React helps us **navigate between different pages (components)** in a React app **without refreshing the page**.

---

### 🛠️ What do we use for routing?

We use a library called **React Router**. It gives us special components like:

* `<BrowserRouter>` – wraps your app and enables routing.
* `<Routes>` – holds all your route definitions.
* `<Route>` – defines a single route (page).
* `<Link>` – works like `<a>` but without reloading the page.

---

### 📦 Install React Router

```bash
npm install react-router-dom
```

---

### 🧱 Basic Example:

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

### 🔍 What Happens Here?

* `BrowserRouter` → enables routing in your app.
* `Link` → lets users go to other pages without refreshing.
* `Routes` → holds all the routes.
* `Route` → tells what component to show for a specific path.

---
## Other Method. `createBrowserRouter()`

### ✅ What is `createBrowserRouter()`?

It is a newer way to define routes **using JavaScript objects** instead of JSX `<Route>` components.

You define your **routes as an array of objects**, and then use `<RouterProvider>` to enable them in your app.

---

### 📦 What is a Route?

A **Route** in React defines **what component to show** when the user visits a specific **URL path**.

---

### 🛠️ Example:

```js
{ path: "/", element: <Home /> }
```

👆 This means:

> When the user visits **`/`**, show the **`<Home />`** component.

---

### 🧱 Basic Route Setup

You define routes like this:

```js
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> }
]);
```

Then you wrap your app with:

```jsx
<RouterProvider router={router} />
```

---

### 🧭 How to Navigate Between Routes

Use `<Link>` instead of `<a>` (to avoid page reload):

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
```

---

### 🚪 What if I want common layout (like Navbar)?

You use **nested routes**:

```js
{
  path: "/",
  element: <App />,     // App has Navbar and <Outlet />
  children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> }
  ]
}
```

In `App.jsx`:

```jsx
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />  // This shows the current route component
    </>
  );
}
```

---

### 🚨 What about 404 Route (Page Not Found)?

Add this at the end of your children:

```js
{ path: "*", element: <NotFound /> }
```

It will match any **undefined route**.

---

### ✅ Summary

| Concept        | Meaning                            |
| -------------- | ---------------------------------- |
| `path`         | The URL to match                   |
| `element`      | The component to show              |
| `children`     | Nested routes inside a layout      |
| `<Outlet />`   | Where child components will appear |
| `<Link to="">` | Navigate to another route          |
| `path: "*"`    | Catch-all for unknown routes (404) |

---

Absolutely! Let's talk about **`NavLink`** in React Router — in the same **simple and clear way**.

---

### 🧭 What is `<NavLink>`?

`<NavLink>` is just like `<Link>`, but it can **automatically add a CSS class when the link is active** (i.e., when the URL matches).

✅ It's perfect for **highlighting active pages** in a navbar.

---

### 🛠️ Basic Usage:

```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/">Home</NavLink>
<NavLink to="/login">Login</NavLink>
```

---

### 🎨 Add Active Style or Class

#### 🔹 Example with `className`:

```jsx
<NavLink
  to="/"
  className={({ isActive }) => isActive ? "active-link" : ""}
>
  Home
</NavLink>
```

* `isActive` is `true` if the link matches the current URL.
* You can use it to apply a custom class.

---

### 💡 Why Use `NavLink`?

| Feature              | `<Link>` | `<NavLink>` |
| -------------------- | -------- | ----------- |
| Navigation           | ✅        | ✅           |
| Active class support | ❌        | ✅           |
| Useful for navbars   | ❌        | ✅           |

---

### ✅ Final Tip: Styling Example

```css
/* in index.css or App.css */
.active-link {
  color: red;
  font-weight: bold;
}
```

Now when you're on that route, the link will automatically be styled.

---


### 🔑 What are Params in React Router?

**Params** are dynamic parts of the URL, like:

```
/user/101
/product/abc123
```

Here, `101` and `abc123` are **URL parameters** — they **change based on user or item**.

---

### 🛠️ How to Define a Param Route?

Use `:` to define a **dynamic value** in the path:

```js
{ path: "/user/:id", element: <User /> }
```

🟢 It means:

> This route matches `/user/1`, `/user/101`, `/user/xyz`, etc.

---

### 🔍 How to Read Params?

Use the hook:

```js
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  return <h2>User ID is: {params.id}</h2>;
}
```

🧠 `params.id` will give you whatever is in the URL after `/user/`.

---

### ✨ Full Example

#### 👇 Route Setup:

```js
{
  path: "/user/:id",
  element: <User />
}
```

#### 👇 Component:

```jsx
function User() {
  const { id } = useParams();
  return <h1>Hello, User {id}</h1>;
}
```

#### 👇 Link to Navigate:

```jsx
<Link to="/user/101">Visit User 101</Link>
```

---
Perfect! Let's now learn about **Search Params** in React Router — in the same **easy and clear way**.

---

### 🔍 What are Search Params?

Search params are the **`?key=value`** part of a URL.

For example:

```
/products?category=shoes&sort=price
```

Here:

* `category = shoes`
* `sort = price`

These values are not part of the route path — they are **query parameters**.

---

### 🧰 How to Access Search Params?

Use the hook:

```js
import { useSearchParams } from "react-router-dom";
```

---

### ✅ Example

#### 👇 Component:

```jsx
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  return (
    <div>
      <h2>Category: {category}</h2>
      <h3>Sort By: {sort}</h3>
    </div>
  );
}
```

#### 👇 URL to Visit:

```
/products?category=shoes&sort=price
```

---

### 🧭 How to Set Search Params from Code?

```js
const [searchParams, setSearchParams] = useSearchParams();

setSearchParams({ category: "bags", sort: "newest" });
```

🔁 This will change the URL to:

```
/products?category=bags&sort=newest
```
