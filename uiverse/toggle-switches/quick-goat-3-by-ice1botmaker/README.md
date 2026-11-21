# Quick Goat 3

A toggle switch UI element from Uiverse.io by ICe1BotMaker.

Source: https://uiverse.io/ICe1BotMaker/quick-goat-3

Author: ICe1BotMaker

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, modern, toggle switch

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 100%, 100px

## Source Code

### index.html

```html
<label for="check">
  <input checked="" id="check" type="checkbox">
  <div class="check-bg">
    <span class="check-span"></span>
  </div>
</label>
```

### styles.css

```css
/* From Uiverse.io by ICe1BotMaker - Tags: switch, modern, toggle switch */
label[for="check"] input {
  display: none;
}

label[for="check"] .check-bg {
  width: 50px;
  padding: 2.5px;
  background: whitesmoke;
  border-radius: 100px;
  border: 1px solid rgb(228, 228, 228);
  transition: background .1s, border .1s;
}

label[for="check"] .check-span {
  display: block;
  background: rgb(219, 219, 219);
  width: 25px;
  height: 25px;
  border-radius: 100%;
  transition: background .1s, border .1s, margin-left .325s;
}

label[for="check"] input:checked ~ .check-bg {
  background: rgb(81, 107, 255);
  border: 1px solid rgb(68, 90, 216);
}

label[for="check"] input:checked ~ .check-bg .check-span {
  background: white;
  border: 0;
  margin-left: 18px;
}
```
