# Orange Hound 27

A button UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/orange-hound-27

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, shadow, hover effect

Colors: #0974f1, #414141

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="button">
  Hover me
</button>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: button, shadow, hover effect */
.button {
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #414141;
  color: white;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover {
  border-color: #0974f1;
  box-shadow: 0 0 20px rgba(9, 117, 241, 0.8);
}

.button:active {
  box-shadow: 0 0 10px rgba(9, 117, 241, 0.4);
}
```
