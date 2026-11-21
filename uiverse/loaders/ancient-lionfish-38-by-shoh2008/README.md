# Ancient Lionfish 38

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/ancient-lionfish-38

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #daa520, #ffd700

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  transform: translateZ(1px);
}

.loader:after {
  content: '$';
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 32px;
  font-weight: bold;
  background: #FFD700;
  color: #DAA520;
  border: 4px double;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .1);
  animation: coin-flip 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes coin-flip {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }

  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }

  100% {
    transform: rotateY(3600deg);
  }
}
```
