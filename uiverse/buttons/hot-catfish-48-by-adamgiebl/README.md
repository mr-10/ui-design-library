# Hot Catfish 48

A button UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/hot-catfish-48

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, blue, button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button> Click me
</button>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: 3d, blue, button */
button {
  font-size: 16px;
  padding: 1em 3.3em;
  transform: perspective(200px) rotateX(15deg);
  color: white;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  background: linear-gradient(0deg, rgba(63,94,251,1) 0%, rgba(70,135,252,1) 100%);
  box-shadow: rgba(63,94,251,0.2) 0px 40px 29px 0px;
  will-change: transform;
  transition: all 0.3s;
  border-bottom: 2px solid rgba(70,135,252,1);
}

button:hover {
  transform: perspective(180px) rotateX(30deg) translateY(2px);
}

button:active {
  transform: perspective(170px) rotateX(36deg) translateY(5px);
}
```
