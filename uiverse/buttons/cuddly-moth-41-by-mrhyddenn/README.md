# Cuddly Moth 41

A button UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/cuddly-moth-41

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button>
    <a>Hover me</a>
</button>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: button */
button {
  background: transparent;
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  padding: 20px 30px;
  perspective: 30rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.308);
}

button::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: linear-gradient(320deg, rgba(0, 140, 255, 0.678), rgba(128, 0, 128, 0.308));
  z-index: 1;
  transition: background 3s;
}

button:hover::before {
  animation: rotate 1s;
  transition: all .5s;
}

@keyframes rotate {
  0% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
```
