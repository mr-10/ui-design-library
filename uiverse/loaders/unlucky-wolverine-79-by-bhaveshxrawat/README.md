# Unlucky Wolverine 79

A loader UI element from Uiverse.io by bhaveshxrawat.

Source: https://uiverse.io/bhaveshxrawat/unlucky-wolverine-79

Author: bhaveshxrawat

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #4158d0, #c850c0, #ffcc70

Fonts: See styles.css

Spacing and radius: 10em

## Source Code

### index.html

```html
<div class="loader">
<div class="bar" id="red"></div>
<div class="bar" id="mint"></div>
<div class="bar" id="grey"></div>
<div class="bar" id="purple"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by bhaveshxrawat - Tags: loader */
.loader {
 display: flex;
 justify-content: center;
 align-content: center;
 align-items: center;
 gap: 5px;
 height: 80px;
 width: 80px;
}

.bar {
 width: 7px;
 height: 50px;
 border-radius: 10em;
 background-image: linear-gradient(60deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
 background-size: 390%;
 animation: live 2s linear infinite;
}

@keyframes live {
 0%, 50%, 100% {
  transform: scaleY(1);
 }

 30%, 70% {
  background-position: right;
  transform: scaleY(1.15);
 }
}
```
