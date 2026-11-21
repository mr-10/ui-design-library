# Chilly Moose 65

A button UI element from Uiverse.io by Nawsome.

Source: https://uiverse.io/Nawsome/chilly-moose-65

Author: Nawsome

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #666, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="arrow">
  <div class="arrow-top"></div>
  <div class="arrow-bottom"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Nawsome - Tags: button */
.arrow {
  cursor: pointer;
  height: 60px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: transform 0.1s;
  width: 50px;
}

.arrow-top, .arrow-bottom {
  background-color: #666;
  height: 4px;
  left: -5px;
  position: absolute;
  top: 50%;
  width: 100%;
}

.arrow-top:after, .arrow-bottom:after {
  background-color: #fff;
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.15s;
}

.arrow-top {
  transform: rotate(45deg);
  transform-origin: bottom right;
}

.arrow-top:after {
  left: 100%;
  right: 0;
  transition-delay: 0s;
}

.arrow-bottom {
  transform: rotate(-45deg);
  transform-origin: top right;
}

.arrow-bottom:after {
  left: 0;
  right: 100%;
  transition-delay: 0.15s;
}

.arrow:hover .arrow-top:after {
  left: 0;
  transition-delay: 0.15s;
}

.arrow:hover .arrow-bottom:after {
  right: 0;
  transition-delay: 0s;
}

.arrow:active {
  transform: translateX(-50%) translateY(-50%) scale(0.9);
}
```
