# Polite Turtle 80

A toggle switch UI element from Uiverse.io by cosnametv.

Source: https://uiverse.io/cosnametv/polite-turtle-80

Author: cosnametv

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: material design, notification, switch, checkbox, download, circle, light&dark, creative

Colors: #2e2e2e, #43a047, #4a4a4a, #66bb6a, #fff

Fonts: See styles.css

Spacing and radius: 20px, 50%

## Source Code

### index.html

```html
<label class="switch">
  <div class="toggle-switch">
    <input id="switch" type="checkbox" />
    <label for="switch"></label>
  </div>
</label>
```

### styles.css

```css
/* From Uiverse.io by cosnametv  - Tags: material design, notification, switch, checkbox, download, circle, light&dark, creative */
.toggle-switch {
  position: relative;
  width: 80px;
  height: 40px;
}

.toggle-switch input {
  display: none;
}

.toggle-switch label {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #2e2e2e, #4a4a4a);
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s;
}

.toggle-switch input:checked + label {
  background: linear-gradient(to right, #66bb6a, #43a047);
}

.toggle-switch label:before {
  content: "";
  position: absolute;
  height: 36px;
  width: 36px;
  left: 2px;
  bottom: 2px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, background 0.3s;
}

.toggle-switch input:checked + label:before {
  transform: translateX(40px);
  background-color: #66bb6a;
}
```
