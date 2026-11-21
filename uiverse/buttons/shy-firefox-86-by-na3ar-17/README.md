# Shy Firefox 86

A button UI element from Uiverse.io by Na3ar-17.

Source: https://uiverse.io/Na3ar-17/shy-firefox-86

Author: Na3ar-17

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, icon, animation, button

Colors: #268bff, #268bffaf

Fonts: Arial, Helvetica, sans-serif

Spacing and radius: 8px

## Source Code

### index.html

```html
<button class="button">
  <svg
    viewBox="0 0 24 24"
    fill="none"
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    class="icon"
  >
    <path
      d="M5 12h14m-7 7V5"
      stroke-width="2"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="currentColor"
    ></path>
  </svg>

  Create Task
</button>
```

### styles.css

```css
/* From Uiverse.io by Na3ar-17  - Tags: simple, icon, animation, button */
.button {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  font-weight: 500;
  background-color: #268bff;
  color: white;
  border: none;
  gap: 2px;
  border-radius: 8px;
  padding: 4px 8px;
}

.button .icon {
  width: 20px;
}

.button:hover {
  background-color: #268bffaf;
}
.button:active {
  transform: translateY(2px);
}
```
