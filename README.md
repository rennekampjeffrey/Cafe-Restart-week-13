# Moonwood Café (Sample Website)

This project is a complete sample café landing page that follows your assignment requirements:

- Welcome alert message on page load.
- JavaScript-generated menu from an array using `forEach()` and `appendChild()`.
- Random daily special button.
- Day/Night mode toggle using `classList.toggle()`.
- Café image swap between day and night themes.
- FAQ accordion with `addEventListener()` and one-open-at-a-time behavior.

## Menu Array

```js
const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];
```

## Café Theme

**Theme:** Moonwood Café — a cozy, forest-inspired coffee shop with warm wood interiors, calm lighting, and handcrafted drinks.

## Why the alert message fits

The alert says the café is **closing early at 5:00 PM due to weather**, which is exactly the kind of immediate update visitors need when they land on a café website.

## How the day/night toggle works

Clicking **Toggle Day/Night Mode** adds/removes the `.dark-mode` class on `body` and swaps the hero image:

- Day mode: `./cafe-day.svg`
- Night mode: `./cafe-night.svg`

## How to run locally

Open `index.html` directly in your browser, or use a local static server.

## Publish with GitHub Pages (Live Link)

1. Create a new GitHub repository and push this project.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default branch), folder `/ (root)`
4. Save, wait for deployment, then copy your live URL.

Your live URL will look like:

`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## What to submit for your class post

- Your **CodePen link** (for the alert step) if your instructor requires it separately.
- Your **CodeSandbox or GitHub Pages live link** for the full project.
- A short paragraph describing:
  - Your café concept
  - How your day/night toggle works
  - What you learned from using JavaScript DOM methods/events
