# Lovely Fireant 30

A loader UI element from Uiverse.io by Lmickk2.

Source: https://uiverse.io/Lmickk2/lovely-fireant-30

Author: Lmickk2

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, light&dark

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 100%

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
/* From Uiverse.io by Lmickk2 - Tags: loading, loader, light&dark */
.loader {
  display: flex;
  transition: all 0.4s;
}

.loader div {
  margin-left: 0.8rem;
  background-color: rgb(34, 34, 34);
  box-shadow: inset 2px 2px 10px black;
  border-radius: 100%;
  height: 1rem;
  width: 1rem;
}

.box-load1 {
  animation: brighten 1.2s infinite;
}

.box-load2 {
  animation: brighten 1.2s infinite;
  animation-delay: .2s;
}

.box-load3 {
  animation: brighten 1.2s infinite;
  animation-delay: .4s;
}

@keyframes brighten {
  100% {
    background-color: rgb(165, 165, 165);
    box-shadow: none;
  }
}
```
