# Blue Tiger 12

A loader UI element from Uiverse.io by Saiyed-Tanvir.

Source: https://uiverse.io/Saiyed-Tanvir/blue-tiger-12

Author: Saiyed-Tanvir

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, box, blocky, box-shadow

Colors: #ffa600

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="box"></div>
```

### styles.css

```css
/* From Uiverse.io by Saiyed-Tanvir - Tags: loader, box, blocky, box-shadow */
.box {
  height: 5cm;
  width: 5cm;
  border: 5px solid #ffa600;
  box-shadow: inset 0 0 0 #ffa600;
  animation: load 2s ease-in-out infinite;
}

@keyframes load {
  0% {
    box-shadow: inset -2.5cm -2.5cm 0 #ffa600;
  }

  25% {
    box-shadow: inset 2.5cm -2.5cm 0 #ffa600;
  }

  50% {
    box-shadow: inset 2.5cm 2.5cm 0 #ffa600;
  }

  75% {
    box-shadow: inset -2.5cm 2.5cm 0 #ffa600;
  }

  100% {
    box-shadow: inset -2.5cm -2.5cm 0 #ffa600;
  }
}
```
