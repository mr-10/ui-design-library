# Evil Parrot 25

A input UI element from Uiverse.io by alexruix.

Source: https://uiverse.io/alexruix/evil-parrot-25

Author: alexruix

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, search

Colors: #242424, #5b5fc7, #f5f5f5

Fonts: See styles.css

Spacing and radius: 4px, 4px 4px 2px 2px

## Source Code

### index.html

```html
<input class="input" name="text" placeholder="Search..." type="search">
```

### styles.css

```css
/* From Uiverse.io by alexruix - Tags: input, search */
.input {
  max-width: 190px;
  background-color: #f5f5f5;
  color: #242424;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;
}

input:focus {
  border-bottom: 2px solid #5b5fc7;
  border-radius: 4px 4px 2px 2px;
}

input:hover {
  outline: 1px solid lightgrey;
}
```
