# Loud Ape 6

A loader UI element from Uiverse.io by garerim.

Source: https://uiverse.io/garerim/loud-ape-6

Author: garerim

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #333

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="anim-box">
        <div class="anim-interieur">
            <div class="rect rect1"></div>
            <div class="rect rect2"></div>
            <div class="rect rect3"></div>
            <div class="rect rect4"></div>
            <div class="rect rect5"></div>
        </div>
    </div>
```

### styles.css

```css
/* From Uiverse.io by garerim - Tags: loader */
.anim-box {
  width: 200px;
  height: 200px;
  border: 5px solid #333;
  margin: 100px auto;
  position: relative;
}

.anim-interieur {
  width: 100px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    /* background-color: orange; */
  text-align: center;
}

.rect {
  background-color: #333;
  display: inline-block;
  height: 60px;
  width: 6px;
  margin: 0px  1px;
  animation: etire 1.2s infinite ease-in-out;
}

@keyframes etire {
  0% {
    transform: scaleY(0.4);
  }

  20% {
    transform: scaleY(1);
  }

  40% {
    transform: scaleY(0.4);
  }

  100% {
    transform: scaleY(0.4);
  }
}

.rect2 {
  animation-delay: -1.1s;
}

.rect3 {
  animation-delay: -1s;
}

.rect4 {
  animation-delay: -0.9s;
}

.rect5 {
  animation-delay: -0.8s;
}
```
