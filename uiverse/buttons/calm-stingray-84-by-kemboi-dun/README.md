# Calm Stingray 84

A button UI element from Uiverse.io by Kemboi-Dun.

Source: https://uiverse.io/Kemboi-Dun/calm-stingray-84

Author: Kemboi-Dun

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #181818, #f8f8f8

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="btn">
        Hover me
    </button>
```

### styles.css

```css
/* From Uiverse.io by Kemboi-Dun - Tags: button */
.btn {
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #f8f8f8;
  text-transform: uppercase;
  position: relative;
  transition: .5s ease;
  cursor: pointer;
}

.btn::before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 2px;
  width: 0;
  background-color: #f8f8f8;
  transition: .5s ease;
}

.btn:hover {
  color: #181818;
  transition-delay: .5s;
}

.btn:hover::before {
  width: 100%;
}

.btn::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: #f8f8f8;
  transition: .4s ease;
  z-index: -1;
}

.btn:hover::after {
  height: 100%;
  transition-delay: 0.4s;
}
```
