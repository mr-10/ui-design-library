# Blue Chipmunk 76

A button UI element from Uiverse.io by sunnyshaikh.

Source: https://uiverse.io/sunnyshaikh/blue-chipmunk-76

Author: sunnyshaikh

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #fbd148

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>
  Hover Me!
</button>
```

### styles.css

```css
/* From Uiverse.io by sunnyshaikh - Tags: button */
button {
  position: relative;
  background: #FBD148;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  padding: 1rem 3rem;
  font-size: 1em;
  cursor: pointer;
  transition: .25s ease;
}

button::before {
  position: absolute;
  content: '';
  box-sizing: border-box;
  top: 0;
  left: 0;
  transform: translate(-5px, -5px);
  width: 100%;
  height: 100%;
  border: 1px solid rgb(84, 84, 84);
  transition: .25s ease;
}

button:hover {
  transform: translate(-5px, -5px);
}

button:hover::before {
  transform: translate(5px, 5px);
}
```
