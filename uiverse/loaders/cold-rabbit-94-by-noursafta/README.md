# Cold Rabbit 94

A loader UI element from Uiverse.io by NourSafta.

Source: https://uiverse.io/NourSafta/cold-rabbit-94

Author: NourSafta

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: circle loader, cool loader

Colors: #46c380, #dddddd

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by NourSafta - Tags: circle loader, cool loader */
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
}

.loader::after {
  content: "";
  width: 75px;
  height: 75px;
  border: 15px solid #dddddd;
  border-top-color: #46C380;
  border-radius: 50%;
  animation: loading 0.75s ease-out infinite;
}

@keyframes loading {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
```
