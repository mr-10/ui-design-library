# Popular Snake 36

A loader UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/popular-snake-36

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #0270e1

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: loader */
.loader {
 --size: 40px;
 display: flex;
 gap: 0.6rem;
}

.box {
 width: var(--size);
 height: var(--size);
 background: #0270e1;
 animation: rotate 2s infinite;
}

.box:nth-child(2) {
 animation-delay: 0.25s;
}

.box:nth-child(3) {
 animation-delay: 0.5s;
}

@keyframes rotate {
 50% {
  transform: rotate(180deg)
 }
}
```
