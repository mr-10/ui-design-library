# Sweet Monkey 41

A loader UI element from Uiverse.io by SilasRodrigues19.

Source: https://uiverse.io/SilasRodrigues19/sweet-monkey-41

Author: SilasRodrigues19

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path fill="#470BA9" d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"></path>
        </svg></span>
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path fill="#470BA9" d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"></path>
        </svg></span>
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path fill="#470BA9" d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"></path>
        </svg></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by SilasRodrigues19 - Tags: loader */
.loader {
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

.loader span {
  width: 50px;
  height: 50px;
  margin: -5px;
  animation: dots_411 1.5s infinite ease-in-out;
}

.loader span:nth-child(1) {
  -webkit-animation-delay: -.40s;
  animation-delay: -.40s;
}

.loader span:nth-child(2) {
  -webkit-animation-delay: -.25s;
  animation-delay: -.25s;
}

.loader span:nth-child(3) {
  -webkit-animation-delay: -.10s;
  animation-delay: -.10s;
}

@keyframes dots_411 {
  5% {
    opacity: 0;
  }

  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(.8);
    transform: scale(.8);
  }
}
```
