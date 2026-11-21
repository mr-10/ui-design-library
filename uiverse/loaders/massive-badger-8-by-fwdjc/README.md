# Massive Badger 8

A loader UI element from Uiverse.io by FWDJc.

Source: https://uiverse.io/FWDJc/massive-badger-8

Author: FWDJc

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animated, colorful, dvd, keyframes, css animation

Colors: #212121

Fonts: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by FWDJc - Tags: animated, colorful, dvd, keyframes, css animation */
.loader {
  width: 150px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  animation: bounce 5s infinite;
}

.loader::before {
  content: 'DVD';
  position: absolute;
  display: block;
  left: 5%;
  bottom: 55%;
  color: green;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 4em;
  font-weight: 900;
  font-style: italic;
  animation: div-color-change 5s infinite;
}

.loader::after {
  content: 'FWDJC';
  position: absolute;
  top: 30%;
  left: 21%;
  color: #212121;
  font-size: .5em;
  font-weight: 800;
  letter-spacing: 10px;
  z-index: 1;
}

@keyframes bounce {
  0% {
    background-color: red;
    transform: translateX(0) translateY(60px);
  }

  25% {
    background-color: blue;
    transform: translateX(60px) translateY(0);
  }

  55% {
    background-color: green;
    transform: translateX(0) translateY(-60px);
  }

  75% {
    background-color: yellow;
    transform: translateX(-60px) translateY(0);
  }

  100% {
    background-color: purple;
    transform: translateX(0) translateY(60px);
  }
}

@keyframes div-color-change {
  0% {
    color: red;
  }

  25% {
    color: blue;
  }

  55% {
    color: green;
  }

  75% {
    color: yellow;
  }

  100% {
    color: purple;
  }
}
```
