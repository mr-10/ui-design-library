# Polite Wombat 84

A card UI element from Uiverse.io by G4b413l.

Source: https://uiverse.io/G4b413l/polite-wombat-84

Author: G4b413l

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, animated

Colors: #b8b8b8, #fff

Fonts: See styles.css

Spacing and radius: 16px

## Source Code

### index.html

```html
<div class="container">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by G4b413l - Tags: card, animated */
.container {
  display: flex;
  gap: 10px;
}

.card {
  background-color: #fff;
  height: 100px;
  width: 100px;
  flex: 1;
  border-radius: 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card:hover {
  flex: 2;
  background-color: #b8b8b8;
}
```
