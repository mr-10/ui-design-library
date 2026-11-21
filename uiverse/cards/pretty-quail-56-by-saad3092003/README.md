# Pretty Quail 56

A card UI element from Uiverse.io by Saad3092003.

Source: https://uiverse.io/Saad3092003/pretty-quail-56

Author: Saad3092003

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, card, hover, shadow, animated, shake, hover effect, box-shadow

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<div class="one-div">
  <div class="text">Hello There</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Saad3092003  - Tags: animation, card, hover, shadow, animated, shake, hover effect, box-shadow */
.one-div {
  position: relative;
  height: 250px;
  width: 200px;
  background-color: rgb(15, 15, 15);
  transform-style: preserve-3d;
  animation: rot 2s infinite ease;
  border-radius: 20px;
  box-shadow: 0 0 50px 0px, inset 0 0 90px 0px;
  color: white;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.one-div .text {
  opacity: 0;
  transition: all 0.5s;
}

.one-div:hover.one-div .text {
  scale: 1.2;
  opacity: 0.7;
}

.one-div:hover {
  box-shadow: 0 0 50px 0px, inset 5px 5px 20px 0px black;
}

@keyframes rot {
  0% {
    transform: rotateX(-15deg) translateY(0px);
  }

  50% {
    transform: rotateX(-15deg) translateY(-10px);
  }

  100% {
    transform: rotateX(-15deg) translateY(0px);
  }
}
```
