# Moody Lion 47

A button UI element from Uiverse.io by Deri-Kurniawan.

Source: https://uiverse.io/Deri-Kurniawan/moody-lion-47

Author: Deri-Kurniawan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, colorful, btn, hover effect

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 12px, 8px

## Source Code

### index.html

```html
<button class="button">
  <div class="light-border">Colorful Shiny</div>
</button>
```

### styles.css

```css
/* From Uiverse.io by Deri-Kurniawan  - Tags: button, colorful, btn, hover effect */
.button {
  position: relative;
  cursor: pointer;
  padding: 6px 6px;
  position: relative;
  background: linear-gradient(
    75deg,
    rgba(192, 97, 237, 0.8),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4),
    rgba(252, 144, 98, 0.8),
    rgba(252, 144, 98, 0.8),
    rgba(255, 255, 255, 0.4),
    rgba(228, 89, 199, 0.8),
    rgba(255, 255, 255, 0.4),
    rgba(228, 89, 199, 0.8)
  );
  border: 1.5px solid transparent;
  border-radius: 12px;
  inset: 0;
}

.button .light-border {
  padding: 8px 24px;
  border: 0.1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
}

.button:hover {
  filter: contrast(1.2) brightness(1.2);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease-in-out;
}
```
