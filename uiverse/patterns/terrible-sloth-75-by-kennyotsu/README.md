# Terrible Sloth 75

A pattern UI element from Uiverse.io by kennyotsu.

Source: https://uiverse.io/kennyotsu/terrible-sloth-75

Author: kennyotsu

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, pink, pattern, dog bone

Colors: #9f84bd, #c09bd8

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by kennyotsu  - Tags: simple, pink, pattern, dog bone */
.container {
  --color: #c09bd8;
  background-color: #9f84bd;
  width: 100%;
  height: 100%;
  position: relative;
}
.container::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.8;
  background: radial-gradient(circle, var(--color) 15%, transparent 15%),
    radial-gradient(circle, var(--color) 15%, transparent 15%) 6px -6px,
    radial-gradient(circle, var(--color) 15%, transparent 15%) 6px -1px,
    radial-gradient(circle, var(--color) 15%, transparent 15%) 10px 2px,
    radial-gradient(circle, var(--color) 15%, transparent 15%) 14px 5px,
    radial-gradient(circle, var(--color) 15%, transparent 15%) 18px 8px,
    radial-gradient(circle, var(--color) 15%, transparent 15%) 18px 12px,
    radial-gradient(circle, var(--color) 15%, transparent 15%) 23px 6px;
  background-size: 50px 50px;
}
```
