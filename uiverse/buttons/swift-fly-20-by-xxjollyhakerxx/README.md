# Swift Fly 20

A button UI element from Uiverse.io by xXJollyHAKERXx.

Source: https://uiverse.io/xXJollyHAKERXx/swift-fly-20

Author: xXJollyHAKERXx

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, gradient, button

Colors: #00f0a0

Fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

Spacing and radius: 50px

## Source Code

### index.html

```html
<button class="button1"> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by xXJollyHAKERXx - Tags: simple, gradient, button */
.button1 {
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 font-size: 16px;
 font-weight: 400;
 height: 45px;
 width: 85px;
 border: 0px solid;
 background-image: linear-gradient(45deg,blue,#00f0a0,blue);
 background-size: 500% 400%;
 color: white;
 border-radius: 50px;
 transition: 0.6s all;
}

.button1:hover {
 background-position: 75% 50%;
 transform: perspective(100px)
}

.button1:active {
 transform: scale(0.95);
 transition: 0.1s;
}
```
