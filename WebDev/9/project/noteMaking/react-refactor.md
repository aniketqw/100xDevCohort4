# React Refactor for Notes App

This document explains the refactor from a plain HTML/CSS/JS frontend into a simple React app.

## 1. Why React?

- React lets us build the UI as one component that manages state.
- Instead of manually updating DOM elements, React re-renders the app when data changes.
- This is a lightweight refactor because we are using React from a CDN and no build tool.

## 2. What changed

### `public/index.html`

- Replaced the static notes markup with a single `<div id="root"></div>`.
- Added CDN imports for React, ReactDOM, and Babel:
  - `react.development.js`
  - `react-dom.development.js`
  - `babel.min.js`
- Loaded `script.js` with `type="text/babel"` so the browser can compile JSX directly.

### `public/script.js`

- Replaced manual DOM code with a React component called `NotesApp`.
- Used `React.useState` to store:
  - `notes` list
  - `noteText` input value
- Used `React.useEffect` to load notes once when the component mounts.
- Added a `saveNote` function to post a note and refresh the list.
- Rendered the UI in JSX:
  - controlled `<textarea>`
  - submit `<button>`
  - note cards mapped from `notes`
- Used `ReactDOM.render(<NotesApp />, document.getElementById("root"))` to start React.

### `public/style.css`

- Kept the same styling.
- The React app uses identical CSS classes as before.
- No changes were needed here except allowing the same page layout.

## 3. How React simplified this app

- The component owns state and UI together.
- No manual DOM creation or updating is needed.
- React handles showing the note list cleanly using `notes.map(...)`.
- The app logic is now centralized in one function component.

## 4. How to run the app

1. Start the backend server:
   - `node index.js`
2. Open the browser:
   - `http://localhost:3000`

The React app is served from the same `public` folder.

## 5. Notes on this implementation

- This is a simple React app using the browser version of React.
- It is not a full build toolchain app like Create React App or Vite.
- It is a good learning step before moving to a full React project setup.

## 6. Refactor reasoning

- `index.html` became a React host page instead of a static UI page.
- `script.js` became the React component instead of DOM-manipulation script.
- `style.css` stayed as shared presentation logic.
- This keeps the backend unchanged and keeps the frontend code minimal.
