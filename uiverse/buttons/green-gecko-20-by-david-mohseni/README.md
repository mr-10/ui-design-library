# Green Gecko 20

A button UI element from Uiverse.io by david-mohseni.

Source: https://uiverse.io/david-mohseni/green-gecko-20

Author: david-mohseni

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #0005, #aaa, #fff, #fff2

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="wrap">
    <button class="btn">
        <span class="text">Volume</span>
    </button>
</div>
```

### styles.css

```css
/* From Uiverse.io by david-mohseni - Tags: button */
.wrap {
  text-align: center;
  margin: 20px 0;
}

.btn {
  width: 100px;
  height: 100px;
  background: repeating-radial-gradient(circle at 50% 50%, rgba(200,200,200,.2) 0%, rgba(200,200,200,.2) 2%, transparent 2%, transparent 3%, rgba(200,200,200,.2) 3%, transparent 3%), conic-gradient(white 0%, silver 10%, white 35%, silver 45%, white 60%, silver 70%, white 80%, silver 95%, white 100%);
  border-radius: 50%;
  box-shadow: 0 0px 20px #0005, 0 -0px 20px #fff2;
  outline: 1px solid #fff;
  outline-offset: -2px;
  transition: 1s;
}

.text {
  font-size: 20px;
  font-weight: 700;
  color: #aaa;
  text-align: center;
  text-shadow: 1px 1px 1px #fff;
}

.btn:hover {
  transform: rotate(90deg);
}
```
