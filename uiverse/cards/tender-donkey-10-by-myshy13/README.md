# Tender Donkey 10

A card UI element from Uiverse.io by myshy13.

Source: https://uiverse.io/myshy13/tender-donkey-10

Author: myshy13

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #222, #4e4e4e, #ccc

Fonts: monospace

Spacing and radius: 0.8em

## Source Code

### index.html

```html
<div class="card"></div>
```

### styles.css

```css
/* From Uiverse.io by myshy13  - Tags: card */
.card {
  font-family: monospace;
  scale: 1.2;
  height: 15em;
  width: 20em;
  border-radius: 0.8em;
  background: #222;
  overflow: hidden;
  color: #ccc;

  transition: 0.3s ease;
  &:before {
    content: "User - zsh";
    text-align: center;
    padding: 0.2em;
    display: block;
    background-color: #4e4e4e;
  }
  &:after {
    content: "User@device ~ $ ";
    margin: 0.2em;
  }
  &:hover {
    scale: 1.3;
  }
}
```
