# Afraid Squid 51

A button UI element from Uiverse.io by andrew-demchenk0.

Source: https://uiverse.io/andrew-demchenk0/afraid-squid-51

Author: andrew-demchenk0

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, button, arrow, submit, confirm

Colors: #323232, #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="button">
  Let`s go →
</button>
```

### styles.css

```css
/* From Uiverse.io by andrew-demchenk0 - Tags: animation, button, arrow, submit, confirm */
.button {
  --font-color: #323232;
  --bg-color: #fff;
  --main-color: #323232;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
}

.button:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}
```
