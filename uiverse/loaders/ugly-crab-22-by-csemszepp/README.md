# Ugly Crab 22

A loader UI element from Uiverse.io by csemszepp.

Source: https://uiverse.io/csemszepp/ugly-crab-22

Author: csemszepp

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, animated

Colors: #0ff, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="centered">
	<div class="blob-1"></div>
	<div class="blob-2"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by csemszepp - Source: https://codepen.io/megatroncoder/pen/Xqeyva - Tags: loader, animated */
.centered {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgb(33 33 33 / var(--tw-bg-opacity))!important;
  ;
	filter: blur(10px) contrast(20);
}

.blob-1,.blob-2 {
  width: 70px;
  height: 70px;
  position: absolute;
  background: #fff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.blob-1 {
  left: 20%;
  animation: osc-l 2.5s ease infinite;
}

.blob-2 {
  left: 80%;
  animation: osc-r 2.5s ease infinite;
  background: #0ff;
}

@keyframes osc-l {
  0% {
    left: 20%;
  }

  50% {
    left: 50%;
  }

  100% {
    left: 20%;
  }
}

@keyframes osc-r {
  0% {
    left: 80%;
  }

  50% {
    left: 50%;
  }

  100% {
    left: 80%;
  }
}
```
