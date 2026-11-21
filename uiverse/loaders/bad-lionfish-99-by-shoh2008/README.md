# Bad Lionfish 99

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/bad-lionfish-99

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #2e2e2e

Fonts: See styles.css

Spacing and radius: 30%, 45%, 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.5) inset,
      0 5px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.loader:before,
  .loader:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 45%;
  top: -40%;
  background-color: #2e2e2e;
  animation: wave 5s linear infinite;
}

.loader:before {
  border-radius: 30%;
  background: rgba(122, 122, 122, 0.4);
  animation: wave 5s linear infinite;
}

@keyframes wave {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
```
