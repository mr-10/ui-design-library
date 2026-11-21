# Jolly Zebra 42

A button UI element from Uiverse.io by Gumpack.

Source: https://uiverse.io/Gumpack/jolly-zebra-42

Author: Gumpack

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #f09819, #ff512f, #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="btn"> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by Gumpack - Tags: button */
.btn {
 background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)
}

.btn {
 margin: 10px;
 padding: 15px 30px;
 text-align: center;
 text-transform: uppercase;
 transition: 0.5s;
 background-size: 200% auto;
 color: white;
 border-radius: 10px;
 display: block;
 border: 0px;
 font-weight: 700;
 box-shadow: 0px 0px 14px -7px #f09819;
}

.btn:hover {
 background-position: right center;
 /* change the direction of the change here */
 color: #fff;
 text-decoration: none;
}

.btn:active {
 transform: scale(0.95);
}
```
