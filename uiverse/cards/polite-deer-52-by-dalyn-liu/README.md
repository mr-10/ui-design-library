# Polite Deer 52

A card UI element from Uiverse.io by Dalyn-Liu.

Source: https://uiverse.io/Dalyn-Liu/polite-deer-52

Author: Dalyn-Liu

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: challenge, copy, border, box-shadow

Colors: #1abc9c

Fonts: See styles.css

Spacing and radius: 30% 70% 63% 37% / 30% 30% 70% 70%, 67% 33% 37% 63% / 29% 60% 40% 71%

## Source Code

### index.html

```html
<div class="one-div"></div>
```

### styles.css

```css
/* From Uiverse.io by Dalyn-Liu - Tags: challenge, copy, border, box-shadow */
.one-div {
  width: 50px;
  height: 50px;
  background: #1abc9c;
  border-radius: 30% 70% 63% 37% / 30% 30% 70% 70%;
  margin-right: 15px;
  animation: logo 1.2s infinite alternate;
  box-shadow: 0 0 10px #1abc9c;
}

@keyframes logo {
  100% {
    transform: scale(1.2);
    border-radius: 67% 33% 37% 63% / 29% 60% 40% 71%;
  }
}
```
