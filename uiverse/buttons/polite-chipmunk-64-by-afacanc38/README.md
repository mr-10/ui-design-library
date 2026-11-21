# Polite Chipmunk 64

A button UI element from Uiverse.io by Afacanc38.

Source: https://uiverse.io/Afacanc38/polite-chipmunk-64

Author: Afacanc38

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: skeuomorphism, minimalist, black, button, dark, cool btn

Colors: #181818, #353535, #424242

Fonts: See styles.css

Spacing and radius: 2px

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by Afacanc38 - Tags: skeuomorphism, minimalist, black, button, dark, cool btn */
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 2px;
  background: #424242;
  color: white;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, .1) inset,
    0 0 0 1px rgba(0, 0, 0, .7),
    0 -1px 0 0 rgba(0, 0, 0, .7) inset,
    0 1px 2px 1px rgba(0, 0, 0, .6);
  cursor: pointer;
  transition: 50ms ease-out;
  font-weight: 600;
}

.button:hover, .button:focus, .button:focus-visible {
  background: #353535;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, .05) inset,
    0 0 0 1px rgba(0, 0, 0, .7),
    0 -1px 0 0 rgba(0, 0, 0, .7) inset,
    0 1px 2px 1px rgba(0, 0, 0, .6);
  border: none;
  outline: none;
}

.button:active {
  background: #181818;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .7) inset,
    0 1px 0 0 rgba(255, 255, 255, .05),
    0 1px 2px 1px rgba(0, 0, 0, .6) inset;
}
```
