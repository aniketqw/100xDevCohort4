# Notes App Styling Explanation

This file explains each CSS rule added to `frontend/index.html` and why it was used.

## Style block

```css
body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #111;
    color: #f5f5f5;
}
```

- `margin: 0;`
  - removes default browser spacing around the page.
- `font-family: ...`
  - picks a clean system font that looks good on all devices.
- `background: #111;`
  - gives the app a dark background to make the notes area pop.
- `color: #f5f5f5;`
  - sets the default text color to a soft white for readability.

```css
.app-shell {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px 20px;
}
```

- `max-width: 960px;`
  - keeps the content from stretching too wide on large screens.
- `margin: 0 auto;`
  - centers the app horizontally in the browser.
- `padding: 24px 20px;`
  - adds space around the page content inside the app container.

```css
.app-header {
    margin-bottom: 18px;
}
```

- `margin-bottom: 18px;`
  - separates the header from the rest of the content.

```css
.app-header h1 {
    margin: 0 0 8px;
    font-size: 2rem;
}
```

- `margin: 0 0 8px;`
  - removes top margin and adds a small gap below the heading.
- `font-size: 2rem;`
  - makes the title larger and easy to read.

```css
.app-header p {
    margin: 0;
    color: #cbd5e1;
}
```

- `margin: 0;`
  - removes default spacing from the paragraph.
- `color: #cbd5e1;`
  - uses a lighter text color for the subtitle.

```css
.layout {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
```

- `display: flex;`
  - makes the note list and form sit side by side.
- `gap: 20px;`
  - adds consistent spacing between the two panels.
- `flex-wrap: wrap;`
  - allows the panels to stack on smaller screens.

```css
.notes-panel,
.form-panel {
    background: #1b1f28;
    border: 1px solid #2a2f3a;
    border-radius: 16px;
    padding: 18px;
    flex: 1 1 320px;
    min-width: 280px;
}
```

- `background: #1b1f28;`
  - gives both panels a dark card-style background.
- `border: 1px solid #2a2f3a;`
  - adds a subtle border for definition.
- `border-radius: 16px;`
  - rounds the panel corners for a softer look.
- `padding: 18px;`
  - provides internal spacing inside each card.
- `flex: 1 1 320px;`
  - allows the panels to grow and shrink while staying at least 320px wide.
- `min-width: 280px;`
  - ensures the panels stay readable on narrow screens.

```css
#notes {
    min-height: 240px;
    display: grid;
    gap: 12px;
}
```

- `min-height: 240px;`
  - keeps the notes area from collapsing when empty.
- `display: grid;`
  - lays out each note card with consistent spacing.
- `gap: 12px;`
  - adds space between note cards.

```css
.note-card {
    background: #161a21;
    border: 1px solid #2a2f3a;
    border-radius: 12px;
    padding: 14px;
    color: #e2e8f0;
    line-height: 1.5;
}
```

- `background: #161a21;`
  - gives each note a slightly darker card background.
- `border: 1px solid #2a2f3a;`
  - defines note edges with a subtle border.
- `border-radius: 12px;`
  - softens the note corners.
- `padding: 14px;`
  - adds breathing room inside each note.
- `color: #e2e8f0;`
  - ensures the note text is bright and readable.
- `line-height: 1.5;`
  - improves the spacing between lines of note text.

```css
.form-panel input {
    width: 100%;
    border: 1px solid #374151;
    border-radius: 10px;
    padding: 12px 14px;
    background: #0f1219;
    color: #f8fafc;
    margin-bottom: 14px;
}
```

- `width: 100%;`
  - makes the input fill the form panel width.
- `border: 1px solid #374151;`
  - gives the input a crisp edge.
- `border-radius: 10px;`
  - rounds the input corners.
- `padding: 12px 14px;`
  - makes the input comfortable to type in.
- `background: #0f1219;`
  - keeps the input visually consistent with the dark theme.
- `color: #f8fafc;`
  - makes typed text visible and bright.
- `margin-bottom: 14px;`
  - separates the input from the button.

```css
.form-panel button {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 12px 14px;
    background: #2563eb;
    color: white;
    font-weight: 600;
    cursor: pointer;
}
```

- `width: 100%;`
  - makes the button fill the panel width.
- `border: none;`
  - removes default browser button borders.
- `border-radius: 10px;`
  - matches the rounded input style.
- `padding: 12px 14px;`
  - makes the button easy to click.
- `background: #2563eb;`
  - gives the button a bright, noticeable color.
- `color: white;`
  - keeps the button text easy to read.
- `font-weight: 600;`
  - makes the button label stand out.
- `cursor: pointer;`
  - shows the button is clickable.

```css
.form-panel button:hover {
    background: #1d4ed8;
}
```

- `background: #1d4ed8;`
  - changes the button color on hover for a simple interaction effect.

## Summary

These styles create a basic dark note app layout with:
- centered content,
- clear panels,
- comfortable spacing,
- readable text,
- and simple interactive button styling.

The goal is to keep the app visually clean while still preserving the simple note-taking experience.
