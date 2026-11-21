# Nice Mouse 77

A loader UI element from Uiverse.io by isfan4ik.

Source: https://uiverse.io/isfan4ik/nice-mouse-77

Author: isfan4ik

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: red, green, pink, loader, effect loader, loading animation

Colors: #00ff00, #ff0092

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<svg class="svg">
      <path class="path"></path>
   </svg>
   <svg>
      <path></path>
   </svg>
```

### styles.css

```css
/* From Uiverse.io by isfan4ik - Tags: red, green, pink, loader, effect loader, loading animation */
.body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg {
  position: absolute;
  width: 400px;
  fill: none;
}

.svg:nth-child(2) {
  filter: blur(40px);
}

.svg path {
  d: path("M0,25 C150,110 150, -60 300,25");
  stroke: #ff0092;
  stroke-width: 50;
  stroke-linecap: round;
  transform: translate(50px,50%);
  animation: animate 2s ease-in-out infinite;
}

@keyframes animate {
  0% {
    stroke: greenyellow;
    stroke: #ff0092;
    d: path("M0,25 C150,110 150, -60 300,25");
  }

  50% {
    stroke: dodgerblue;
    stroke: #00ff00;
    d: path("M0,25 C160,-50 140, 110 300,25");
  }
}
```
