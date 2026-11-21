# Itchy Bobcat 50

A card UI element from Uiverse.io by EmmaxPlay.

Source: https://uiverse.io/EmmaxPlay/itchy-bobcat-50

Author: EmmaxPlay

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #00ca4e, #f8fbfe, #ff605c, #ffbd44

Fonts: See styles.css

Spacing and radius: 50%, 8px

## Source Code

### index.html

```html
<div class="card">
  <div class="tools">
    <div class="circle">
      <span class="red box"></span>
    </div>
    <div class="circle">
      <span class="yellow box"></span>
    </div>
    <div class="circle">
      <span class="green box"></span>
    </div>
  </div>
  <div class="card__content">
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by EmmaxPlay - Tags: card */
.card {
 width: 190px;
 height: 254px;
 margin: 0 auto;
 background-color: #F8FBFE;
 border-radius: 8px;
 z-index: 1;
}

.tools {
 display: flex;
 align-items: center;
 padding: 9px;
}

.circle {
 padding: 0 4px;
}

.box {
 display: inline-block;
 align-items: center;
 width: 10px;
 height: 10px;
 padding: 1px;
 border-radius: 50%;
}

.red {
 background-color: #ff605c;
}

.yellow {
 background-color: #ffbd44;
}

.green {
 background-color: #00ca4e;
}
```
