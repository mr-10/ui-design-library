# Swift Chicken 44

A input UI element from Uiverse.io by SARAN2004.

Source: https://uiverse.io/SARAN2004/swift-chicken-44

Author: SARAN2004

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: active, input, click

Colors: #00ff2a, #ccc, #ff0000

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="inputs">
  <input type="text" name="text" class="input" placeholder="Enter Text" required="">
</div>
```

### styles.css

```css
/* From Uiverse.io by SARAN2004 - Tags: active, input, click */
.input {
  max-width: 190px;
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  position: relative;
}

.input:valid {
  border-color: #00ff2a;
  color: #00ff2a;
  box-shadow: 2px 2px 8px 1px #00ff2a;
}

.input:invalid {
  border-color: #ff0000;
  color: #ff0000;
  box-shadow: 2px 2px 8px 1px #ff0000;
  /* translate: -8px 8px 0px 0px; */
}

.text {
  margin-top: 10px;
  color: black;
}
```
