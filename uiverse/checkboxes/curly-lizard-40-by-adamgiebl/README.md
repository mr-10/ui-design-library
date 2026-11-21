# Curly Lizard 40

A checkbox UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/curly-lizard-40

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #30cfd0, #fff

Fonts: See styles.css

Spacing and radius: 3px, 5px

## Source Code

### index.html

```html
<label class="cyberpunk-checkbox-label">
<input type="checkbox" class="cyberpunk-checkbox">
Check me</label>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: checkbox */
.cyberpunk-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #30cfd0;
  border-radius: 5px;
  background-color: transparent;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
}

.cyberpunk-checkbox:before {
  content: "";
  background-color: #30cfd0;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 10px;
  height: 10px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

.cyberpunk-checkbox:checked:before {
  transform: translate(-50%, -50%) scale(1);
}

.cyberpunk-checkbox-label {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
}
```
