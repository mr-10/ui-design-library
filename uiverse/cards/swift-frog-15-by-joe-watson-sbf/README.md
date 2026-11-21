# Swift Frog 15

A card UI element from Uiverse.io by joe-watson-sbf.

Source: https://uiverse.io/joe-watson-sbf/swift-frog-15

Author: joe-watson-sbf

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, scroll snap

Colors: See styles.css

Fonts: sans-serif

Spacing and radius: .2rem

## Source Code

### index.html

```html
<div class="container">
    <div class="item">SCROLL SNAP</div>
    <div class="item">SCROLL SNAP</div>
    <div class="item">SCROLL SNAP</div>
    <div class="item">SCROLL SNAP</div>
    <div class="item">SCROLL SNAP</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by joe-watson-sbf - Tags: card, scroll snap */
.container {
  display: flex;
  overflow: auto;
  scroll-snap-type: x mandatory;
  padding: 10px;
  gap: 10px;
  scroll-padding: 10px;
  width: 190px;
  height: 254px;
  background-color: white;
  border: 2px solid coral;
}

.container .item {
  scroll-snap-align: start;
  flex: 0 0 60%;
  background: linear-gradient(120deg, coral 30%, rgb(255, 187, 163) 88%, rgb(255, 185, 160) 
  40%, coral 48%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: bisque;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.3em;
  font-weight: 400;
  font-family: sans-serif;
  border-radius: .2rem;
}
```
