# Spicy Jellyfish 41

A checkbox UI element from Uiverse.io by ahmedyasserdev.

Source: https://uiverse.io/ahmedyasserdev/spicy-jellyfish-41

Author: ahmedyasserdev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, hamburger, rotate, menu

Colors: #333

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<input id="burger-checkbox" type="checkbox" />
<label class="burger" for="burger-checkbox">
  <span></span>
  <span></span>
  <span></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by ahmedyasserdev  - Tags: checkbox, hamburger, rotate, menu */
.burger {
  display: inline-block;
  cursor: pointer;
  z-index: 1000;
}

.burger span {
  display: block;
  width: 30px;
  height: 3px;
  background: #333;
  margin: 6px 0;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    opacity 0.3s ease;
}

#burger-checkbox {
  display: none;
}

#burger-checkbox:checked + .burger span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

#burger-checkbox:checked + .burger span:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

#burger-checkbox:checked + .burger span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
```
