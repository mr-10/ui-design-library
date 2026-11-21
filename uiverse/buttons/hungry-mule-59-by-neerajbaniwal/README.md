# Hungry Mule 59

A button UI element from Uiverse.io by neerajbaniwal.

Source: https://uiverse.io/neerajbaniwal/hungry-mule-59

Author: neerajbaniwal

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, transition, text, btn, hover effect, html, css, #button

Colors: #868686, #9f9f9f, #fff

Fonts: "Poppins", sans-serif

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<a class="btn-shine" href="https://check.so">Get early access</a>
```

### styles.css

```css
/* From Uiverse.io by neerajbaniwal  - Tags: button, transition, text, btn, hover effect, html, css, #button */
.btn-shine {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 48px;
  color: #fff;
  background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  font-family: "Poppins", sans-serif;
}
@-moz-keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}
@-webkit-keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}
@-o-keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}
@keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}
```
