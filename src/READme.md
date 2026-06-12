# 🛠️ Team 13 Developer Guide & Workflow Rules

Welcome to the `src` folder! This is where all of our React code lives.

Before you start building your assigned component, you **must** read this guide to understand how we are styling our app and keeping our code clean.

## 🚨 The React "Class Trap" (And How to Avoid It)

Because we are building a single-page React application using **Vanilla CSS**, we have to be very careful about our CSS class names.

**What is the Class Trap?**
In standard HTML, your CSS files stay separated. In React, when the project is built, **all of our separate CSS files get smashed together into one giant file.** If Developer A uses `.title { color: red; }` in `Hero.css`, and Developer B uses `.title { color: blue; }` in `Footer.css`, the computer will crash them together, and one person's design will break.

**The Solution: The "Prefix" Rule**
To prevent our styles from fighting each other, you must start **every single class name** with the exact name of your component.

✅ **DO THIS:**
If you are building the `Hero` component:
`.hero-container { ... }`
`.hero-title { ... }`
`.hero-button { ... }`

❌ **NEVER DO THIS:**
`.container { ... }`
`.title { ... }`
`.button { ... }`

---

## 📂 How to Build and Link Your Component

When you are ready to start your task, follow these exact steps:

### 1. Create Your Files

Go into the `src/components/` folder and create two files with your component's name. Always capitalize the first letter!

- `YourComponent.jsx` (This is where your HTML/React goes)
- `YourComponent.css` (This is where your Vanilla CSS goes)

### 2. Import Your CSS

Inside your `.jsx` file, you must import your specific CSS file at the very top so React knows to use it.

```javascript
import React from "react";
import "./YourComponent.css"; // Connects your styles!

function YourComponent() {
  return (
    <div className="yourcomponent-container">{/* Your code goes here */}</div>
  );
}

export default YourComponent;
```

### 3. Use the Global Colors

Do not guess the colors! We have set up the official Figma colors in `src/index.css`. Use these variables in your component's CSS file:

- Backgrounds: `var(--primary-bg)` or `var(--card-bg)`
- Text: `var(--text-main)` or `var(--text-muted)`
- Example: `color: var(--text-main);`

---

## 🛑 Git Workflow Reminders

1. **Never code on the `main` branch.** Always create a new branch for your component (e.g., `git checkout -b feature/contact-form`).
2. **Test your code locally** by running `npm run dev` before you commit.
3. When you are done, push your branch and open a **Pull Request (PR)** on GitHub.
4. Notify the Team Lead to review and merge your PR.
