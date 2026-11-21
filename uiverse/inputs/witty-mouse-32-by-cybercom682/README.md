# Witty Mouse 32

A input UI element from Uiverse.io by Cybercom682.

Source: https://uiverse.io/Cybercom682/witty-mouse-32

Author: Cybercom682

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, number, quantity

Colors: #333333, #666666

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="number-control">
  <div class="number-left"></div>
  <input type="number" name="number" class="number-quantity">
  <div class="number-right"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Cybercom682 - Tags: input, number, quantity */
.number-control {
  display: flex;
  align-items: center;
}

.number-left::before,
.number-right::after {
  content: attr(data-content);
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 20px;
  color: white;
  transition: background-color 0.3s;
  cursor: pointer;
}

.number-left::before {
  content: "-";
}

.number-right::after {
  content: "+";
}

.number-quantity {
  padding: 0.25rem;
  border: 0;
  width: 50px;
  -moz-appearance: textfield;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.number-left:hover::before,
.number-right:hover::after {
  background-color: #666666;
}
```
