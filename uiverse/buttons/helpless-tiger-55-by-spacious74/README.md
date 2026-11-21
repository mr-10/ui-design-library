# Helpless Tiger 55

A button UI element from Uiverse.io by Spacious74.

Source: https://uiverse.io/Spacious74/helpless-tiger-55

Author: Spacious74

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, button, realistic, code, social media, neo

Colors: #0000ff11, #0000ff80, #0051ff2d, #00e1ff1a, #0f1111, #181b1b, #3fe9ff, #777777, #fff, #ffffff

Fonts: See styles.css

Spacing and radius: 120px, 14px, 16px

## Source Code

### index.html

```html
<button class="button">
  <div class="blob1"></div>
  <div class="blob2"></div>
  <div class="inner">Realism</div>
</button>
```

### styles.css

```css
/* From Uiverse.io by Spacious74  - Tags: 3d, button, realistic, code, social media, neo */
.button {
  cursor: pointer;
  font-size: 1.6rem;
  border-radius: 16px;
  border: none;
  padding: 2px;
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
  position: relative;
}
.button::after {
  content: "";
  position: absolute;
  width: 65%;
  height: 60%;
  border-radius: 120px;
  top: 0;
  right: 0;
  box-shadow: 0 0 20px #ffffff38;
  z-index: -1;
}

.blob1 {
  position: absolute;
  width: 70px;
  height: 100%;
  border-radius: 16px;
  bottom: 0;
  left: 0;
  background: radial-gradient(
    circle 60px at 0% 100%,
    #3fe9ff,
    #0000ff80,
    transparent
  );
  box-shadow: -10px 10px 30px #0051ff2d;
}

.inner {
  padding: 14px 25px;
  border-radius: 14px;
  color: #fff;
  z-index: 3;
  position: relative;
  background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
}
.inner::before {
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 14px;
  background: radial-gradient(
    circle 60px at 0% 100%,
    #00e1ff1a,
    #0000ff11,
    transparent
  );
  position: absolute;
}
```
