# Witty Dolphin 100

A button UI element from Uiverse.io by Fatima-Zahrae-Acharki.

Source: https://uiverse.io/Fatima-Zahrae-Acharki/witty-dolphin-100

Author: Fatima-Zahrae-Acharki

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #352552, #765ab5

Fonts: monospace

Spacing and radius: 8px

## Source Code

### index.html

```html
<button class="btn">
  space
</button>
```

### styles.css

```css
/* From Uiverse.io by Fatima-Zahrae-Acharki - Tags: button */
.btn {
  font-size: 16px;
  font-family: monospace;
  color: white;
  border-radius: 8px;
  letter-spacing: 5px;
  font-weight: 800;
  text-transform: uppercase;
  transition: 0.6s;
  padding: 10px 20px;
  border: none;
  transition-property: box-shadow;
}

.btn {
  background: #765ab5;
  box-shadow: 0 0 50px #765ab5;
}

.btn:hover {
  box-shadow: 0 0 5px #765ab5,
              0 0 25px #352552,
              0 0 50px #352552,
              0 0 100px #765ab5,
              0 0 500px #765ab5;
}
```
