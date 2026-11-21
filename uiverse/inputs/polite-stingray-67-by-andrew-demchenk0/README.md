# Polite Stingray 67

A input UI element from Uiverse.io by andrew-demchenk0.

Source: https://uiverse.io/andrew-demchenk0/polite-stingray-67

Author: andrew-demchenk0

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, shadow, password

Colors: #2d8cf0, #323232, #666, #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<input type="password" placeholder="Password" name="text" class="input">
```

### styles.css

```css
/* From Uiverse.io by andrew-demchenk0 - Tags: input, shadow, password */
.input {
  --input-focus: #2d8cf0;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
}

.input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

.input:focus {
  border: 2px solid var(--input-focus);
}
```
