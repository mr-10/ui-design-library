# Dry Fish 68

A button UI element from Uiverse.io by Codecite.

Source: https://uiverse.io/Codecite/dry-fish-68

Author: Codecite

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #4e484a, #ed553b, #fff

Fonts: sans-serif

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="button">
  <a href="#" class="anchor">
    <span>Download CV</span>
  </a>
</div>
```

### styles.css

```css
/* From Uiverse.io by Codecite - Tags: button */
.anchor {
  text-decoration: none;
  color: #fff;
  display: inline-block;
  font-family: sans-serif;
  font-weight: 600;
  border-radius: 50px;
  border: 2px solid #ed553b;
  padding: 14px 40px 13px;
  overflow: hidden;
  position: relative;
}

.anchor:hover {
  color: #4e484a;
}

.button a::before {
  position: absolute;
  content: "";
  z-index: 0;
  background-color: #ed553b;
  left: -5px;
  right: -5px;
  bottom: -5px;
  height: 111%;
  transition: all .3s ease;
}

.button a:hover::before {
  height: 11%;
}

.button span {
  position: relative;
  z-index: 2;
  transition: all .3s ease;
}
```
