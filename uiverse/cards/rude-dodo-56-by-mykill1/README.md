# Rude Dodo 56

A card UI element from Uiverse.io by mykill1.

Source: https://uiverse.io/mykill1/rude-dodo-56

Author: mykill1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #7a2727, #9d3232, #ae3737, #ba3b3b, #e24848

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="card">
    <div class="content"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by mykill1 - Tags: card */
.card {
  width: 190px;
  height: 254px;
  border-radius: 10px;
  background: #ae3737;
  overflow: hidden;
  box-shadow: inset 27px 27px 54px #7a2727, inset -27px -27px 54px #e24848;
}

.content {
  width: 160px;
  height: 220px;
  position: relative;
  margin-top: 16px;
  margin-left: 15px;
  border: none;
  border-radius: 10px;
  background: #ae3737;
  background: linear-gradient(45deg, #9d3232, #ba3b3b);
  box-shadow: 27px -27px 54px #7a2727,
             -27px 27px 54px #e24848;
}

content :hover {
  border: 1px solid #7a2727;
}

.card :hover {
  border: 1px solid #7a2727;
}
```
