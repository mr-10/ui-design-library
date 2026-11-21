# Unlucky Wolverine 36

A button UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/unlucky-wolverine-36

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 20px, 50%

## Source Code

### index.html

```html
<div class="container_mouse">
    <span class="mouse-btn">
        <span class="mouse-scroll"></span>
    </span>
    <span>Scroll Down</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: button */
.mouse-btn {
  margin: 10px auto;
  width: 40px;
  height: 80px;
  border: 3px solid rgba(122, 122, 124, 0.918);
  border-radius: 20px;
  display: flex;
}

.mouse-scroll {
  display: block;
  width: 20px;
  height: 20px;
  background: linear-gradient(170deg, rgba(122, 122, 124, 0.918), rgb(123, 124, 124));
  border-radius: 50%;
  margin: auto;
  animation: scrolling13 1s linear infinite;
}

@keyframes scrolling13 {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(20px);
  }
}
```
