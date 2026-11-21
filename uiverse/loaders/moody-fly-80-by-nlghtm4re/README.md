# Moody Fly 80

A loader UI element from Uiverse.io by NlghtM4re.

Source: https://uiverse.io/NlghtM4re/moody-fly-80

Author: NlghtM4re

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: blue, loader, smooth, shadow, glow, neon

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="container">
  <div class="top">
    <div class="square">
      <div class="square">
        <div class="square">
          <div class="square">
            <div class="square"><div class="square">
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="square">
      <div class="square">
        <div class="square">
          <div class="square">
            <div class="square"><div class="square">
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="left">
    <div class="square">
      <div class="square">
        <div class="square">
          <div class="square">
            <div class="square"><div class="square">
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="right">
    <div class="square">
      <div class="square">
        <div class="square">
          <div class="square">
            <div class="square"><div class="square">
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by NlghtM4re - Tags: blue, loader, smooth, shadow, glow, neon */
.container {
  position: absolute;
  top: 45%;
  left: 48%;
}

.square {
  width: 8px;
  height: 30px;
  background: rgb(71, 195, 248);
  border-radius: 10px;
  display: block;
  /*margin:10px;*/
  -webkit-animation: turn 2.5s ease infinite;
  animation: turn 2.5s ease infinite;
  box-shadow: rgb(71, 195, 248) 0px 1px 15px 0px;
}

.top {
  position: absolute;
  left: 40%;
  top: 50%;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.bottom {
  position: absolute;
  left: 40%;
  top: 50%;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.left {
  position: absolute;
  left: 40%;
  top: 50%;
}

.right {
  position: absolute;
  left: 40%;
  top: 50%;
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

@-webkit-keyframes turn {
  0% {
    transform: translateX(0) translateY(0) rotate(0);
  }

  50% {
    transform: translateX(400%) translateY(100%) rotate(90deg);
  }

  100% {
    transform: translateX(0) translateY(0) rotate(0);
  }
}

@keyframes turn {
  0% {
    transform: translateX(0) translateY(0) rotate(0);
  }

  70% {
    transform: translateX(400%) translateY(100%) rotate(90deg);
  }

  100% {
    transform: translateX(0) translateY(0) rotate(0);
  }
}
```
