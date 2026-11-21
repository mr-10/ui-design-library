# Neat Dodo 98

A loader UI element from Uiverse.io by Fujitawa.

Source: https://uiverse.io/Fujitawa/neat-dodo-98

Author: Fujitawa

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #336dff, #5c89ff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
  <div class="blue">
</div></div>
```

### styles.css

```css
/* From Uiverse.io by Fujitawa - Tags: loader */
.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  box-shadow: inset -10px -10px 15px rgba(255, 255, 255, 1),
    inset 10px 10px 10px rgba(0, 0, 0, 0.1);
}

.loader::before {
  content: "";
  position: absolute;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 1),
    10px 10px 10px rgba(0, 0, 0, 0.1);
}

.blue {
  height: 186px;
  width: 220px;
  position: absolute;
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.blue::before {
  content: "";
  position: absolute;
  height: 30px;
  border-radius: 50%;
  width: 30px;
  background: linear-gradient(45deg, #336dff, #5c89ff);
  box-shadow: 0 5px 10px rgb(0 0 0 / 30%);
}
```
