# Strange Walrus 5

A card UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/strange-walrus-5

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: white, black, card, box-shadow

Colors: #000, #111, #272727, #fff

Fonts: See styles.css

Spacing and radius: 17px, 20px

## Source Code

### index.html

```html
<div class="card">
<div class="card__content">
card</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: white, black, card, box-shadow */
.card {
  width: 190px;
  height: 254px;
  border-radius: 20px;
  padding: 2px;
  box-shadow: #111 0 1px 3px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: relative;
  cursor: pointer;
}

.card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, #000, #272727);
  color: #fff;
  border-radius: 17px;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: 900;
}
```
