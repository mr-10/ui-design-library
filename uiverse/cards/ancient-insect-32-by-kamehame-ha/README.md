# Ancient Insect 32

A card UI element from Uiverse.io by kamehame-ha.

Source: https://uiverse.io/kamehame-ha/ancient-insect-32

Author: kamehame-ha

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, card, scroll snap, clean

Colors: #22c55e, #3b82f6, #f43f5e

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="scroll-snap-card">
    <div class="slide red">
        <p class="tip">Scroll On Me</p>
    </div>
    <div class="slide blue">
        <p class="tip">Scroll On Me</p>
    </div>
    <div class="slide green">
        <p class="tip">Scroll On Me</p>
    </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by kamehame-ha - Tags: simple, card, scroll snap, clean */
.red {
  background-color: #f43f5e;
}

.blue {
  background-color: #3b82f6;
}

.green {
  background-color: #22c55e;
}

.scroll-snap-card {
  height: 150px;
  width: 250px;
  scroll-snap-type: y mandatory;
  overflow: auto;
  border-radius: 10px;
}

.scroll-snap-card .slide {
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-snap-card .slide p {
  font-size: 1em;
  color: white;
  font-weight: 700;
}
```
