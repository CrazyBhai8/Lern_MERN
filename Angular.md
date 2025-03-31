# Angular Notes

## Introduction
Angular is a TypeScript-based open-source framework developed by Google for building dynamic web applications. It is a complete rewrite of AngularJS and provides a powerful ecosystem for developing scalable and maintainable single-page applications (SPAs).

### Key Features
- **Component-Based Architecture**: Applications are built using reusable components.
- **Two-Way Data Binding**: Automatically synchronizes the model and the view.
- **Dependency Injection**: Efficiently manages dependencies within an application.
- **Directives**: Enhances HTML with additional behaviors.
- **Routing Module**: Built-in routing support for creating SPAs.
- **Observables & RxJS**: Handles asynchronous operations effectively.

### Advantages
- Strongly typed with TypeScript for better maintainability.
- Modular development approach.
- High performance and optimized rendering with Ahead-of-Time (AOT) compilation.
- Large community support and frequent updates from Google.

## Setup
### Installing Angular
1. **Install Node.js**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).
   - Verify installation:
     ```sh
     node -v
     npm -v
     ```

2. **Install Angular CLI**
   - Run the following command:
     ```sh
     npm install -g @angular/cli
     ```
   - Verify Angular CLI installation:
     ```sh
     ng version
     ```

### Creating a Basic Angular App
1. Create a new Angular project:
   ```sh
   ng new my-angular-app
   ```
2. Navigate into the project directory:
   ```sh
   cd my-angular-app
   ```
3. Serve the application:
   ```sh
   ng serve
   ```
   The app will be available at `http://localhost:4200/`.

### Basic Angular Component Structure
A simple Angular component consists of three files:
- **Component TypeScript file (`app.component.ts`)**
- **Template HTML file (`app.component.html`)**
- **Stylesheet (`app.component.css`)**

Example:
#### `app.component.ts`
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
```

#### `app.component.html`
```html
<h1>Welcome to {{ title }}!</h1>
```

This sets up a basic Angular application with a component that displays a dynamic title.

## Angular Project File Structure
When you create an Angular project using the Angular CLI, it generates several files and folders. Here’s a simple breakdown of the important ones:

```
my-angular-app/
│-- node_modules/       # Stores installed dependencies
│-- src/                # Main source code of the application
│   │-- app/            # Main application folder
│   │   │-- app.module.ts     # Root module of the app
│   │   │-- app.component.ts  # Main component logic
│   │   │-- app.component.html # Main component template
│   │   │-- app.component.css  # Main component styles
│   │-- assets/         # Stores images, icons, and other assets
│   │-- environments/   # Configuration files for different environments
│   │-- main.ts         # Entry point of the Angular app
│   │-- styles.css      # Global styles
│-- angular.json        # Angular project configuration
│-- package.json        # Dependencies and project metadata
│-- tsconfig.json       # TypeScript configuration
```

### Important Files and Their Roles
- **`src/app/app.module.ts`**: Defines the root module and imports required components.
- **`src/app/app.component.ts`**: The main component that acts as the root of the app.
- **`src/main.ts`**: The entry point that bootstraps the application.
- **`angular.json`**: Configures how the Angular project is built and served.
- **`package.json`**: Lists dependencies required for the project.
- **`tsconfig.json`**: Configures TypeScript settings for the project.

## Angular CLI Commands
### Generate Components, Services, and More
- **Create a Component:**
  ```sh
  ng generate component component-name
  ```
  or
  ```sh
  ng g c component-name
  ```

- **Create a Service:**
  ```sh
  ng generate service service-name
  ```
  or
  ```sh
  ng g s service-name
  ```

- **Create a Module:**
  ```sh
  ng generate module module-name
  ```
  or
  ```sh
  ng g m module-name
  ```

- **Create a Directive:**
  ```sh
  ng generate directive directive-name
  ```
  or
  ```sh
  ng g d directive-name
  ```

- **Create a Pipe:**
  ```sh
  ng generate pipe pipe-name
  ```
  or
  ```sh
  ng g p pipe-name
  ```

### Serve and Build the Application
- **Start the Development Server:**
  ```sh
  ng serve
  ```

- **Build the Project for Production:**
  ```sh
  ng build --prod
  ```

- **Run Unit Tests:**
  ```sh
  ng test
  ```

- **Run End-to-End Tests:**
  ```sh
  ng e2e
  ```

## Creating Angular Components
### Generating a Component
To create a new component, use the Angular CLI command:
```sh
ng generate component component-name
```
or shorthand:
```sh
ng g c component-name
```
This creates a new folder with the following files:
- `component-name.component.ts` – Component logic
- `component-name.component.html` – Component template
- `component-name.component.css` – Component styles
- `component-name.component.spec.ts` – Component test file

### Example Component
#### `app/hello/hello.component.ts`
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  message: string = 'Hello, Angular!';
}
```

#### `app/hello/hello.component.html`
```html
<p>{{ message }}</p>
```

### Using a Component
To use this component in another template (e.g., `app.component.html`), add:
```html
<app-hello></app-hello>
```
This will render the `HelloComponent` inside `AppComponent`.


## Data Binding in Angular

Data binding in Angular connects the component’s logic to the template.

### Types of Data Binding

1. Interpolation (One-Way Binding)

   ```html
   <h1>{{ title }}</h1>
   ```

2. **Property Binding**

   ```html
   <img [src]="imageUrl" />
   ```

3. **Event Binding**

   ```html
   <button (click)="onClick()">Click Me</button>
   ```

4. **Two-Way Binding**

   ```html
   <input [(ngModel)]="username" />
   <p>Hello, {{ username }}!</p>
   ```

   Requires `FormsModule` import in `app.module.ts`:

   ```typescript
   import { FormsModule } from '@angular/forms';
   ```
