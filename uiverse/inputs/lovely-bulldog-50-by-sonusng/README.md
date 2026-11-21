# Lovely Bulldog 50

A input UI element from Uiverse.io by sonusng.

Source: https://uiverse.io/sonusng/lovely-bulldog-50

Author: sonusng

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #45feaf, #f9f9f9, #fe4567

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<input required="" type="text" placeholder="Your Name">
```

### styles.css

```css
/* From Uiverse.io by sonusng - Tags: input */
input {
  width: 210px;
  height: 50px;
  padding: 0 16px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #fe4567;
  color: #f9f9f9;
  animation: shake_541 0.14s 3;
}

input:valid {
  border-color: #45feaf;
  animation: none;
}

@keyframes shake_541 {
  0%, 100% {
    translate: 0;
  }

  25% {
    translate: 8px 0;
  }

  75% {
    translate: -8px 0;
  }
}
```
