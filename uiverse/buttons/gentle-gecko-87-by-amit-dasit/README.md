# Gentle Gecko 87

A button UI element from Uiverse.io by AmIt-DasIT.

Source: https://uiverse.io/AmIt-DasIT/gentle-gecko-87

Author: AmIt-DasIT

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #26d526, #5cda5c

Fonts: See styles.css

Spacing and radius: 25px

## Source Code

### index.html

```html
<div class="box">
  <div class="arrow right"></div>
  <div class="text">Learn More</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by AmIt-DasIT - Tags: button */
.box {
  width: 45px;
  height: 45px;
  background: #5cda5c;
  border-radius: 25px;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
}

.box:hover {
  width: 160px;
  background: linear-gradient(to right, #26d526, yellow);
}

.box:hover .arrow {
  display: none;
}

.box .text {
  display: none;
}

.box:hover .text {
  display: flex;
  font-size: 16px;
  font-weight: 550;
  color: black;
  letter-spacing: 0.6px;
  animation: anima 0.6s ease;
}

@keyframes anima {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.box:active {
  background: linear-gradient(to right, rgb(38, 213, 38, 0.8), rgba(255, 255, 0, 0.8));
}
```
