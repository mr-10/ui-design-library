# Pink Shrimp 80

A loader UI element from Uiverse.io by Cybercom682.

Source: https://uiverse.io/Cybercom682/pink-shrimp-80

Author: Cybercom682

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, rotate, scale, eye

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 20% 50%, 50%, 50% 20%

## Source Code

### index.html

```html
<div class="loader">
  <div class="eye"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Cybercom682 - Tags: loader, rotate, scale, eye */
.loader {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  position: relative;
}

.loader::before {
  content: "";
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  animation: doitreverse 4s infinite;
}

.loader::after {
  content: "";
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  animation: doit 4s infinite;
}

@keyframes doit {
  0% {
    transform: scale(1);
  }

  50% {
    border-radius: 20% 50%;
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes doitreverse {
  0% {
    transform: rotate(360deg);
  }

  50% {
    border-radius: 50% 20%;
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.eye {
  height: 50%;
  width: 50%;
  border-radius: 50%;
  border: 1px solid black;
  background-color: rgb(85, 0, 128);
  position: absolute;
  left: 25%;
  top: 25%;
  animation: showme 4s infinite;
}

.eye::before {
  content: "";
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 25%;
  left: 50%;
  animation: showme 4s infinite;
}

.eye::after {
  content: "";
  height: 10%;
  width: 10%;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 60%;
  left: 50%;
  animation: showme 4s infinite;
}

@keyframes showme {
  0% {
    transform: scale(0.3);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.3);
  }
}
```
