# Fresh Hound 11

A button UI element from Uiverse.io by ArturCodeCraft.

Source: https://uiverse.io/ArturCodeCraft/fresh-hound-11

Author: ArturCodeCraft

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, links, btn

Colors: #fff

Fonts: See styles.css

Spacing and radius: 2px

## Source Code

### index.html

```html
<a href="#" class="menu__link">
  Hover me!
</a>
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
  padding-right: 4px;
}

.menu__link:hover {
  text-decoration: underline;
}

.menu__link::before {
  content: '';
  width: 6px;
  height: 6px;
  border-top: solid 2px #fff;
  border-right: solid 2px #fff;
  border-radius: 2px;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%) rotate(45deg);
}
```
