# Sweet Horse 64

A button UI element from Uiverse.io by Na3ar-17.

Source: https://uiverse.io/Na3ar-17/sweet-horse-64

Author: Na3ar-17

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, action, button, hover button

Colors: #268bff, #fff

Fonts: Arial, Helvetica, sans-serif

Spacing and radius: 0.375rem

## Source Code

### index.html

```html
<div class="container"><button class="button">Hover me</button></div>
```

### styles.css

```css
/* From Uiverse.io by Na3ar-17  - Tags: simple, action, button, hover button */
.container {
  * {
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
}

.button {
  width: 140px;
  height: 32px;
  border-radius: 0.375rem;
  cursor: pointer;
  margin-top: 1rem;
  background-image: linear-gradient(#268bff, hsl(252, 82%, 57%));
  transition: all 0.3s ease;
  color: #fff;
  font-weight: 600;
}

.button:hover {
  -webkit-animation: pulse 2s infinite;
  animation: pulse512 1.5s infinite;
  letter-spacing: 2px;
}

.button:active {
  transform: translateY(4px);
}

@keyframes pulse512 {
  0% {
    box-shadow: 0 0 0 0 rgba(5, 186, 218, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(218, 103, 68, 0%);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(218, 103, 68, 0%);
  }
}
```
