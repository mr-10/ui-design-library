# Honest Seahorse 42

A loader UI element from Uiverse.io by Df12345677.

Source: https://uiverse.io/Df12345677/honest-seahorse-42

Author: Df12345677

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000, #001, #011, #111, #112, #122, #222, #233, #333, #666666

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"> 
  <span id="one"></span>
  <span id="two"></span>
  <span id="three"></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by Df12345677 - Tags: loader */
.loader {
  display: flex;
  gap: 10px;
}

.loader span {
  height: 20px;
  width: 20px;
  background-image: linear-gradient(to right , #333 , #233,#222,#122,#112,#111,#011,#001,#000);
  border-radius: 50%;
  animation-name: animar;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  box-shadow: 20px 20px 18px #666666,
             -20px -20px 18px #ffffff;
}

#one {
  animation-delay: 1s;
}

#two {
  animation-delay: 2s;
}

#three {
  animation-delay: 3s;
}

@keyframes animar {
  0% {
    transform: scale(1);
  }

  33% {
    transform: scale(.3);
  }

  66% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
}
```
