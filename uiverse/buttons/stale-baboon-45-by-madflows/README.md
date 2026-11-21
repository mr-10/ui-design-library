# Stale Baboon 45

A button UI element from Uiverse.io by Madflows.

Source: https://uiverse.io/Madflows/stale-baboon-45

Author: Madflows

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, download

Colors: #3d3a4e, #fff

Fonts: See styles.css

Spacing and radius: 1.5rem, inherit

## Source Code

### index.html

```html
<button class="button">
    <span class="button-content">Download </span>
</button>
```

### styles.css

```css
/* From Uiverse.io by Madflows - Tags: button, download */
.button {
  position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: #3d3a4e;
  background-size: 400%;
  color: #fff;
  border: none;
}

.button:hover::before {
  transform: scaleX(1);
}

.button-content {
  position: relative;
  z-index: 1;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: 0 50%;
  width: 100%;
  height: inherit;
  border-radius: inherit;
  background: linear-gradient(
    82.3deg,
    rgba(150, 93, 233, 1) 10.8%,
    rgba(99, 88, 238, 1) 94.3%
  );
  transition: all 0.475s;
}
```
