# Smart Skunk 68

A button UI element from Uiverse.io by Juanes200122.

Source: https://uiverse.io/Juanes200122/smart-skunk-68

Author: Juanes200122

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, button, hover, color, hover effect

Colors: #4741d7, #fff

Fonts: See styles.css

Spacing and radius: 3px

## Source Code

### index.html

```html
<a href="#" class="ov-btn-slide-left">Izquierda
</a>
```

### styles.css

```css
/* From Uiverse.io by Juanes200122 - Tags: simple, animation, button, hover, color, hover effect */
a {
  text-decoration: none;
}

.ov-btn-slide-left {
  background: #fff;
  color: #4741d7;
  border: 2px solid #4741d7;
  padding: 16px 20px;
  border-radius: 3px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: inline-block;
}

.ov-btn-slide-left:hover {
  color: #fff;
}

.ov-btn-slide-left::after {
  content: "";
  background: #4741d7;
  position: absolute;
  z-index: -1;
  padding: 16px 20px;
  display: block;
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

.ov-btn-slide-left:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}
```
