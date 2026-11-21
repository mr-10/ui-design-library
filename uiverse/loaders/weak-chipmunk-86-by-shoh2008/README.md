# Weak Chipmunk 86

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/weak-chipmunk-86

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #30dcf6, #70ca5c, #e09c5f, #f2d200, #f63a99, #ff3d00

Fonts: See styles.css

Spacing and radius: 0 0 12px 12px, 50px, 55px 55px 10px 10px

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  height: 150px;
  width: 100px;
  border-radius: 55px 55px 10px 10px;
  position: relative;
  background: #FF3D00;
  background-image: linear-gradient(0deg,
    #f63a99 25%,
    #30dcf6 25%,
    #30dcf6 25%,
    #30dcf6 50%,
    #f2d200 50%,
    #f2d200 50%,
    #f2d200 75%,
    #70ca5c 75%);
  background-position: 0px 0px;
  background-size: auto 175px;
  background-repeat: repeat-y;
  animation: colorShift 6s linear infinite;
}

.loader:before {
  content: '';
  position: absolute;
  left: 10px;
  bottom: 15px;
  width: 15px;
  height: 100px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
}

.loader:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50% , 0);
  box-shadow: 0 15px 2px rgba(0, 0, 0, 0.25) inset;
  width: 32px;
  height: 45px;
  background: #E09C5F;
  border-radius: 0 0 12px 12px;
}

@keyframes colorShift {
  to {
    background-position: 0 175px
  }
}
```
