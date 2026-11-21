# Giant Lion 94

A loader UI element from Uiverse.io by Lmickk2.

Source: https://uiverse.io/Lmickk2/giant-lion-94

Author: Lmickk2

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, light, animated

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 3em

## Source Code

### index.html

```html
<div class="loader">
  <div class="box-load1"></div>
  <div class="box-load2"></div>
  <div class="box-load3"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Lmickk2 - Tags: loader, light, animated */
.loader {
  display: flex;
  transition: all 0.4s;
}

.loader div {
  margin-left: 0.8rem;
  background-color: transparent;
  box-shadow: 0px 2px 2px black;
  border-radius: 3em;
  height: 1rem;
  width: 2rem;
}

.box-load1 {
  animation: brighten 1.5s infinite;
}

.box-load2 {
  animation: brighten 1.5s infinite;
  animation-delay: .3s;
}

.box-load3 {
  animation: brighten 1.5s infinite;
  animation-delay: .6s;
}

@keyframes brighten {
  100% {
    background-color: black;
    box-shadow: none;
  }
}
```
