# Moody Wombat 53

A loader UI element from Uiverse.io by omar-alghaish.

Source: https://uiverse.io/omar-alghaish/moody-wombat-53

Author: omar-alghaish

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="loading">
    <div class="i"></div>
    <div class="a"></div>
    <div class="u"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by omar-alghaish - Tags: loader */
.loading {
  background-color: rgba(255, 0, 0, 0);
  align-items: center;
  justify-content: center;
  display: flex;
}

.loading div {
  background-color: rgb(255, 217, 0);
  width: 20px;
  height: 20px;
  margin: 20px;
  border-radius: 50px;
  animation-name: load912355;
  animation-duration: .9s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  text-align: center;
  justify-content: center;
}

.loading .a {
  animation-delay: .3s;
}

.loading .u {
  animation-delay: .6s;
}

@keyframes load912355 {
  0% {
    transform: translateY(50px) scale(1);
  }

  100% {
    transform: translateY(10px) scale(1.8) rotate(360deg);
  }
}
```
