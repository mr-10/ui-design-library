# Young Bulldog 90

A loader UI element from Uiverse.io by Clemix37.

Source: https://uiverse.io/Clemix37/young-bulldog-90

Author: Clemix37

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #8900ff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Clemix37 - Tags: loader */
.loader {
 width: 60px;
 height: 60px;
}

.loader::before {
 content: "";
 box-sizing: border-box;
 position: absolute;
 width: 60px;
 height: 60px;
 border-radius: 50%;
 border-top: 2px solid #8900FF;
 border-right: 2px solid transparent;
 animation: spinner8217 0.8s linear infinite;
}

@keyframes spinner8217 {
 to {
  transform: rotate(360deg);
 }
}
```
