# Nervous Owl 11

A button UI element from Uiverse.io by martinval9.

Source: https://uiverse.io/martinval9/nervous-owl-11

Author: martinval9

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000000, #b500ff, #fff

Fonts: Arial

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="btn">Button
</button>
```

### styles.css

```css
/* From Uiverse.io by martinval9 - Tags: button */
.btn {
 color: #B500FF;
 padding: 13px 20px;
 border: 2px solid #B500FF;
 font-size: 17px;
 transition: 0.3s;
 border-radius: 10px;
 font-family: Arial;
 font-weight: 600;
}

.btn:hover {
 transition: 0.3s;
 background-color: #B500FF;
 margin-top: -20px;
 color: #fff;
 animation-name: button_animation;
 animation-duration: 3s;
 animation-iteration-count: infinite;
}

.btn:active {
 transform: scale(0.97);
}

@keyframes button_animation {
 0% {
  background-color: #B500FF;
 }

 25% {
  background-color: #000000;
 }

 50% {
  background-color: #B500FF;
 }

 75% {
  background-color: #000000;
 }

 100% {
  background-color: #B500FF;
 }
}
```
