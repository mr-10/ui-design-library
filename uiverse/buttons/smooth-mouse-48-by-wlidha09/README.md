# Smooth Mouse 48

A button UI element from Uiverse.io by Wlidha09.

Source: https://uiverse.io/Wlidha09/smooth-mouse-48

Author: Wlidha09

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="box">
  <div class="btn">
    <button href="#">HOVER ME</button>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Wlidha09 - Tags: button */
.box {
  height: 66.66%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 150px;
  cursor: pointer;
  color: #FFF;
  transition: all 0.3s;
  position: relative;
}

.btn button {
  z-index: 2;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 17px;
  border: none;
  background-color: transparent;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.5s;
  border: 1px solid rgba(255,255,255,0.2);
  background-color: rgba(255,255,255,0.1);
}

.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.5s;
  border: 1px solid rgba(255,255,255,0.2);
  background-color: rgba(255,255,255,0.1);
}

.btn:hover::before {
  transform: rotate(-45deg);
  background-color: rgba(255,255,255,0);
}

.btn:hover::after {
  transform: rotate(45deg);
  background-color: rgba(255,255,255,0);
}
```
