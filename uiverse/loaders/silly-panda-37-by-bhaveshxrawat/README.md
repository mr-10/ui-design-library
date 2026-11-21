# Silly Panda 37

A loader UI element from Uiverse.io by bhaveshxrawat.

Source: https://uiverse.io/bhaveshxrawat/silly-panda-37

Author: bhaveshxrawat

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<section class="area">
  <div class="ball"></div>
</section>
```

### styles.css

```css
/* From Uiverse.io by bhaveshxrawat - Tags: loader */
.ball {
 position: relative;
 height: 15px;
 width: 15px;
 background-color: rgb(255, 44, 44);
 border-radius: 50%;
 animation: bounce 0.5s ease-in-out infinite both;
}

@keyframes bounce {
 0%, 100% {
  transform: translate(0px, 0px);
 }

 50% {
  transform: translate(0px, 50px) scale(1, 0.77);
 }
}
```
