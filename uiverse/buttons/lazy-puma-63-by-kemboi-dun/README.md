# Lazy Puma 63

A button UI element from Uiverse.io by Kemboi-Dun.

Source: https://uiverse.io/Kemboi-Dun/lazy-puma-63

Author: Kemboi-Dun

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #121212, #181818, #f8f8f8

Fonts: See styles.css

Spacing and radius: 2px

## Source Code

### index.html

```html
<button class="button">
       Hover Button
    </button>
```

### styles.css

```css
/* From Uiverse.io by Kemboi-Dun - Tags: button */
.button {
  text-decoration: none;
  padding: 14px 24px;
  color: #121212;
  border: 1px solid #181818;
  overflow: hidden;
  position: relative;
  transition: color .5s .25s;
  border-radius: 2px;
  background: transparent;
}

.button::before,
.button::after {
  content: '';
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: #181818;
  z-index: -1;
  transform: scaleX(0);
  transition: transform .5s cubic-bezier(.785, .135, .15, .86);
}

.button::before {
  left: 0;
  transform-origin: left;
}

.button::after {
  right: 0;
  transform-origin: right;
}

.button:hover::before,
.button:hover::after {
  transform: scaleX(1);
}

.button:hover {
  color: #f8f8f8;
  transition-delay: .5s;
}
```
