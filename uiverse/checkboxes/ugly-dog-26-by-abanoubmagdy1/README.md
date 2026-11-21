# Ugly Dog 26

A checkbox UI element from Uiverse.io by AbanoubMagdy1.

Source: https://uiverse.io/AbanoubMagdy1/ugly-dog-26

Author: AbanoubMagdy1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 3px

## Source Code

### index.html

```html
<label class="container">
  <input type="checkbox" checked="checked">
  <div class="line"></div>
  <div class="line line-indicator"></div>
</label>
```

### styles.css

```css
/* From Uiverse.io by AbanoubMagdy1 - Tags: checkbox */
/* Hide the default checkbox */
.container input {
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background: rgba(216, 216, 216, 0.603);
}

.container:hover {
  background: rgba(197, 197, 197, 0.527);
}

.line {
  width: calc(100% - 8px);
  height: 3px;
  left: 4px;
  background: rgb(58, 58, 58);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: .7s transform cubic-bezier(0,1,.33,1.2), background .4s;
}

.line-indicator {
  transform: translateY(-50%) rotate(90deg);
}

.container input:checked ~ .line-indicator {
  transform: translateY(-50%);
}
```
