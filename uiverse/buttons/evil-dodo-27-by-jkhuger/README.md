# Evil Dodo 27

A button UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/evil-dodo-27

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #7a5fff, #c1b4ff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="click">Click me</button>
```

### styles.css

```css
/* From Uiverse.io by JkHuger - Tags: button */
.click {
  margin: 2rem auto;
  display: flex;
  background-color: #7A5FFF;
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: .25rem
}

.click {
  transition: background .8s ease-out;
  background: #7A5FFF radial-gradient(circle, transparent 1%, #7A5FFF 1%) center/15000%;
}

.click:active {
  background-color: #c1b4ff;
  background-size: 100%;
  transition: background 0s;
}
```
