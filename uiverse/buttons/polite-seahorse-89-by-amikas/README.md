# Polite Seahorse 89

A button UI element from Uiverse.io by Amikas.

Source: https://uiverse.io/Amikas/polite-seahorse-89

Author: Amikas

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #333, #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="button">
  Click me
</button>
```

### styles.css

```css
/* From Uiverse.io by Amikas - Tags: button */
.button {
  background-color: #333;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 17px;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  background-color: rgb(128, 95, 247);
}

.button:active {
  transform: translateY(0.5em);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}
```
