# Brown Dragon 7

A loader UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/brown-dragon-7

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #00cc69, #00e676, #00ff83

Fonts: 'Staatliches', cursive

Spacing and radius: 2px

## Source Code

### index.html

```html
<div class="triangle"></div>
<div class="triangle-shadow"></div>
```

### styles.css

```css
/* From Uiverse.io by JkHuger - Tags: loader */
.triangle {
  background-color: transparent;
  height: 0px;
  width: 0px;
  border-style: solid;
  border-width: 50px 50px 50px 50px;
  border-radius: 2px;
  border-color: #00ff83 #00e676 #00cc69 #00e676;
  animation: animtrgl 3s infinite ease;
}

.text {
  font-family: 'Staatliches', cursive;
  color: white;
  font-size: 25px;
  width: 250px;
  text-align: center;
  display: block;
  height: 50px;
  position: absolute;
  animation: textload 3s infinite ease;
  text-shadow: 0 0 4px black;
}

@keyframes textload {
  0% {
    top: calc(50% + 100px);
  }

  25% {
    top: calc(50% + 85px);
  }

  50% {
    top: calc(50% + 100px);
  }

  75% {
    top: calc(50% + 85px);
  }

  100% {
    top: calc(50% + 100px);
  }
}

@keyframes animtrgl {
  0% {
    border-width: 50px 75px 50px 25px;
    transform: scale(2);
  }

  25% {
    border-width: 25px 50px 75px 50px;
    transform: scale(1.75);
  }

  50% {
    border-width: 50px 25px 50px 75px;
    transform: scale(2);
  }

  75% {
    border-width: 75px 50px 25px 50px;
    transform: scale(1.75);
  }

  100% {
    border-width: 50px 75px 50px 25px;
    transform: scale(2);
  }
}
```
