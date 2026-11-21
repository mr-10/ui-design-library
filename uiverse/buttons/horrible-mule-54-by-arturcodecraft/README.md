# Horrible Mule 54

A button UI element from Uiverse.io by ArturCodeCraft.

Source: https://uiverse.io/ArturCodeCraft/horrible-mule-54

Author: ArturCodeCraft

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, links, btn

Colors: #fff

Fonts: See styles.css

Spacing and radius: 2px

## Source Code

### index.html

```html
<a href="#" class="menu__link">Hover me!</a>
```

### styles.css

```css
/* From Uiverse.io by ArturCodeCraft - Tags: button, links, btn */
/* <reset-style> ============================ */
a {
  text-decoration: none;
}
/* <main-style> ============================ */
.menu__link {
  color: #fff;
  line-height: 2;
  position: relative;
}

.menu__link::before {
  content: '';
  width: 0;
  height: 2px;
  border-radius: 2px;
  background-color: #fff;
  position: absolute;
  bottom: -.25rem;
  left: 50%;
  transition: width .4s, left .4s;
}

.menu__link:hover::before {
  width: 100%;
  left: 0;
}
```
