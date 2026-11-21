# Swift Husky 44

A button UI element from Uiverse.io by joe-watson-sbf.

Source: https://uiverse.io/joe-watson-sbf/swift-husky-44

Author: joe-watson-sbf

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover

Colors: #1e1e2b, #ffc506, #ffedd3

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="btn">
    Hover me
</button>
```

### styles.css

```css
/* From Uiverse.io by joe-watson-sbf - Tags: button, hover */
.btn {
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #ffedd3;
  text-transform: uppercase;
  position: relative;
  transition: .5s ease;
}

.btn::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #ffc506;
  transition: .5s ease;
}

.btn:hover {
  color: #1e1e2b;
  transition-delay: .5s;
}

.btn:hover::before {
  width: 100%;
}

.btn::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: #ffc506;
  transition: .4s ease;
  z-index: -1;
}

.btn:hover::after {
  height: 100%;
  transition-delay: 0.4s;
  color: aliceblue;
}
```
