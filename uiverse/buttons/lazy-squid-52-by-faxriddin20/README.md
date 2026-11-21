# Lazy Squid 52

A button UI element from Uiverse.io by faxriddin20.

Source: https://uiverse.io/faxriddin20/lazy-squid-52

Author: faxriddin20

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, button, hover, active, hover effect, hover button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<button class="button">Button</button>
```

### styles.css

```css
/* From Uiverse.io by faxriddin20  - Tags: 3d, button, hover, active, hover effect, hover button */
.button {
  cursor: pointer;
  width: 160px;
  height: 50px;
  border-radius: 20px;
  color: violet;
  border: 2px solid violet;
  transition: all 0.6s ease;
}
.button:hover {
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px,
    rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px,
    rgba(240, 46, 170, 0.05) 0px 25px;
}
.button:active {
  box-shadow: none;
}
```
