# Rude Shrimp 21

A card UI element from Uiverse.io by joe-watson-sbf.

Source: https://uiverse.io/joe-watson-sbf/rude-shrimp-21

Author: joe-watson-sbf

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, hover

Colors: #212121, #ff568e, #ff5a91

Fonts: See styles.css

Spacing and radius: 2px, 4px

## Source Code

### index.html

```html
<div class="card">
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
</div>
```

### styles.css

```css
/* From Uiverse.io by joe-watson-sbf - Tags: card, hover */
.card {
  width: 210px;
  height: 254px;
  border-radius: 4px;
  background: #212121;
  display: flex;
  gap: 5px;
  padding: .4em;
}

.card p {
  height: 100%;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  transition: all .5s;
  background: #212121;
  border: 1px solid #ff5a91;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card p:hover {
  flex: 4;
}

.card p span {
  min-width: 14em;
  padding: .5em;
  text-align: center;
  transform: rotate(-90deg);
  transition: all .5s;
  text-transform: uppercase;
  color: #ff568e;
  letter-spacing: .1em;
}

.card p:hover span {
  transform: rotate(0);
}
```
