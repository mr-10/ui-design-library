# Pretty Fireant 78

A loader UI element from Uiverse.io by mobinkakei.

Source: https://uiverse.io/mobinkakei/pretty-fireant-78

Author: mobinkakei

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #3498db, #e67e22, #e74c3c, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
    <span>Loading...</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by mobinkakei - Tags: loader */
.loader {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 5px solid #e74c3c;
  position: relative;
  animation: load 2s linear infinite;
}

.loader::before,.loader::after {
  content: '';
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
}

.loader::before {
  border-top: 5px solid #e67e22;
  transform: rotate(120deg);
}

.loader::after {
  border-top: 5px solid #3498db;
  transform: rotate(240deg);
}

.loader span {
  position: absolute;
  font-size: small;
  width: 100px;
  height: 100px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  animation: a2 2s linear infinite;
}

@keyframes load {
  to {
    transform: rotate(360deg);
  }
}

@keyframes a2 {
  to {
    transform: rotate(-360deg);
  }
}
```
