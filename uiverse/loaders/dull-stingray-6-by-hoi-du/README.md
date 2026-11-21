# Dull Stingray 6

A loader UI element from Uiverse.io by hoi-du.

Source: https://uiverse.io/hoi-du/dull-stingray-6

Author: hoi-du

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: white, loading, loader, spinner, spin, css

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 0%, 0% 0% 0% 0%, 0% 0% 0% 50%, 0% 0% 50% 50%, 0% 50% 50% 50%, 50% 0% 0% 0%

## Source Code

### index.html

```html
<div class="loader"></div>

</head>
<body>
    <span class="loading">

</body>
</html>
</style>
```

### styles.css

```css
/* From Uiverse.io by hoi-du - Tags: white, loading, loader, spinner, spin, css */
<!DOCTYPE html>
<html>
<head>
    <title>loading forever</title>
    <meta charset="utf-8">
    <style>
        body {
  background-color: black;
}

.loading {
  width: 50px;
  height: 50px;
  display: inline-block;
  background-color: white;
  margin: 10px;
  border-radius: 0%;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-name: loadingAnimation;
}

@keyframes loadingAnimation {
  0% {
    border-radius: 50% 50% 50% 50%;
    transform: rotate(0deg);
  }

  12.5% {
    border-radius: 0% 50% 50% 50%;
  }

  25% {
    border-radius: 0% 0% 50% 50%;
    transform: rotate(90deg);
  }

  37.5% {
    border-radius: 0% 0% 0% 50%;
  }

  50% {
    border-radius: 0% 0% 0% 0%;
    transform: rotate(180deg);
  }

  62.5% {
    border-radius: 50% 0% 0% 0%;
  }

  75% {
    border-radius: 50% 50% 0% 0%;
    transform: rotate(270deg);
  }

  87.5% {
    border-radius: 50% 50% 50% 0%;
  }

  100% {
    border-radius: 50% 50% 50% 50%;
    transform: rotate(360deg);
  }
}
```
