# Giant Impala 58

A loader UI element from Uiverse.io by myselfvenky.

Source: https://uiverse.io/myselfvenky/giant-impala-58

Author: myselfvenky

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000, #212121

Fonts: See styles.css

Spacing and radius: 100%

## Source Code

### index.html

```html
<div class="spinner">
  <div class="inner">
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by myselfvenky - Tags: loader */
.spinner {
 width: 40px;
 height: 40px;
 border-radius: 100%;
 background-color: aqua;
 display: grid;
 place-items: center;
 animation: zoomin 1.5s infinite alternate-reverse;
 position: relative;
}

.inner {
 background-color: #212121;
 width: 80%;
 height: 80%;
 border-radius: 100%;
}

@keyframes zoomin {
 0% {
  transform: scale(1);
  box-shadow: 0 0 100px 20px rgb(16, 71, 71);
 }

 100% {
  transform: scale(1.5);
  box-shadow: 0 0 100px 20px #000;
 }
}
```
