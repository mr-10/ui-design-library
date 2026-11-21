# Soft Falcon 9

A toggle switch UI element from Uiverse.io by catraco.

Source: https://uiverse.io/catraco/soft-falcon-9

Author: catraco

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, small, switcher

Colors: #505050, #50f080, #d0d0d0, #f05050

Fonts: See styles.css

Spacing and radius: 100%, 1rem

## Source Code

### index.html

```html
<label class="switch">
  <input class="checkbox" type="checkbox">
  <span class="slider"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by catraco - Tags: simple, small, switcher */
/* Switch - Container */
.switch {
  --primary: #50F080;
  --secondary: #F05050;
  --dark: #505050;
  --light: #D0D0D0;
  background-color: var(--dark);
  position: relative;
  display: inline-block;
  border-radius: 1rem;
  cursor: pointer;
  width: 50px;
  height: 25px;
}

/* Hide default HTML checkbox */
.checkbox {
  opacity: 0
}

/* The slider */
.slider {
  position: absolute;
  left: 0;
  top: 50%;
  width: 50%;
  height: 100%;
  transition: .4s;
  border-radius: 100%;
  transform: translateY(-50%);
  border: 4px solid var(--dark);
  background-color: var(--secondary);
}

.checkbox:checked + .slider {
  background-color: var(--primary);
  transform: translate(100%, -50%);
}
```
