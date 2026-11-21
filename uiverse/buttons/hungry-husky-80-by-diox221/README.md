# Hungry Husky 80

A button UI element from Uiverse.io by Diox221.

Source: https://uiverse.io/Diox221/hungry-husky-80

Author: Diox221

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, animated

Colors: #005288, #333, #fff, #ffffff

Fonts: See styles.css

Spacing and radius: 5rem

## Source Code

### index.html

```html
<button class="btn spacex-btn">
  <span>Launch Rocket</span>
  <div class="btn-bg"></div>
</button>
```

### styles.css

```css
/* From Uiverse.io by Diox221 - Tags: button, animated */
.btn {
  position: relative;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #333;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}

.spacex-btn {
  background-color: #005288;
}

.btn-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  opacity: 0.3;
  z-index: -1;
  transition: transform 0.3s ease-in-out;
}

.spacex-btn:hover .btn-bg {
  transform: translate(-50%, -50%) scale(2);
}
```
