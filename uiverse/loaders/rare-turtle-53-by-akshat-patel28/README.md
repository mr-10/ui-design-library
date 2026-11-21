# Rare Turtle 53

A loader UI element from Uiverse.io by akshat-patel28.

Source: https://uiverse.io/akshat-patel28/rare-turtle-53

Author: akshat-patel28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loader, animated, box

Colors: #e9e9e9

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
  <div class="box-1"></div>
  <div class="box-2"></div>
  <div class="box-3"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by akshat-patel28 - Tags: animation, loader, animated, box */
.loader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.box-1,.box-2,.box-3 {
  width: 1px;
  height: 115px;
  border: 1px solid #e9e9e9;
  background-color: transparent;
  box-sizing: border-box;
}

.box-1 {
  animation: box1animation 4s  forwards ease-in-out infinite;
}

@keyframes box1animation {
  0% {
    width: 1px;
  }

  12.5% {
    width: 60px;
  }

  25% {
    width: 60px;
  }

  37.5% {
    width: 1px;
  }

  50% {
    width: 1px;
  }

  62.5% {
    width: 1px;
  }

  75% {
    width: 1px;
  }

  100% {
    width: 1px;
  }
}

.box-2 {
  animation: box2animation 4s forwards ease-in-out infinite;
}

@keyframes box2animation {
  0% {
    width: 1px;
  }

  12.5% {
    width: 1px;
  }

  25% {
    width: 1px;
  }

  37.5% {
    width: 60px;
  }

  50% {
    width: 60px;
  }

  62.5% {
    width: 1px;
  }

  75% {
    width: 1px;
  }

  100% {
    width: 1px;
  }
}

.box-3 {
  animation: box3animation 4s  forwards ease-in-out infinite;
}

@keyframes box3animation {
  0% {
    width: 1px;
  }

  12.5% {
    width: 1px;
  }

  25% {
    width: 1px;
  }

  37.5% {
    width: 1px;
  }

  50% {
    width: 1px;
  }

  62.5% {
    width: 60px;
  }

  75% {
    width: 60px;
  }

  100% {
    width: 1px;
  }
}
```
