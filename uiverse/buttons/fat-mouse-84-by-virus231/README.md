# Fat Mouse 84

A button UI element from Uiverse.io by virus231.

Source: https://uiverse.io/virus231/fat-mouse-84

Author: virus231

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, gradients, hover effect, advanced

Colors: #00000040, #45090059, #af1905, #d6361f, #ec540e, #ff9465

Fonts: See styles.css

Spacing and radius: 7px

## Source Code

### index.html

```html
<button class="button">Button</button>
```

### styles.css

```css
/* From Uiverse.io by virus231  - Tags: button, gradients, hover effect, advanced */
.button {
  background: linear-gradient(140.14deg, #ec540e 15.05%, #d6361f 114.99%)
      padding-box,
    linear-gradient(142.51deg, #ff9465 8.65%, #af1905 88.82%) border-box;
  border-radius: 7px;
  border: 2px solid transparent;

  text-shadow: 1px 1px 1px #00000040;
  box-shadow: 8px 8px 20px 0px #45090059;

  padding: 10px 40px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  font-size: 18px;
  font-weight: 500;
}

.button:hover {
  box-shadow: none;
  opacity: 80%;
}
```
