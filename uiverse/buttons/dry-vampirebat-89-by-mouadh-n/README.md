# Dry Vampirebat 89

A button UI element from Uiverse.io by mouadh-n.

Source: https://uiverse.io/mouadh-n/dry-vampirebat-89

Author: mouadh-n

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, blue, purple, button, hover, btn, hover effect, css

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 2em

## Source Code

### index.html

```html
<a>
  <div class="buuton">HOVER ME</div>
  <div class="back"></div>
</a>
```

### styles.css

```css
/* From Uiverse.io by mouadh-n  - Website: https://youtu.be/b_8fHNIHFk4?si=L-0kb3bKz6VlasUc - Name:  Coding Play - Tags: simple, blue, purple, button, hover, btn, hover effect, css */
a {
  color: white;
  position: relative;
}
.buuton {
  font-weight: 600;
  border-radius: 2em;
  padding: 0.75rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.253);
  backdrop-filter: blur(10px);
  transform: scale(1.1);
  transition: 0.2s ease-in-out;
}
.back {
  position: absolute;
  background: linear-gradient(20deg, rgb(174, 6, 216) 0%, rgb(85, 31, 200));
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  border-radius: 2em;
  box-shadow: -5px 0 10px rgb(140, 12, 147), 5px 0 10px rgb(85, 31, 200);
  transform: translateY(10px);
}
.buuton:hover {
  transform: translateY(10px);
  box-shadow: -10px 0 50px rgba(241, 0, 108, 0.352),
    10px 0 50px rgb(85, 31, 200);
}
```
