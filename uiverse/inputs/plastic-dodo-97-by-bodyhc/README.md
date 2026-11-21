# Plastic Dodo 97

A input UI element from Uiverse.io by Bodyhc.

Source: https://uiverse.io/Bodyhc/plastic-dodo-97

Author: Bodyhc

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: hover, hover effect, input effect

Colors: #0d14e9, #242424, #fff

Fonts: See styles.css

Spacing and radius: 4px, 5px 5px 2px 2px

## Source Code

### index.html

```html
<input type="text" name="search" placeholder="Search For AnyThink.." class="input">
```

### styles.css

```css
/* From Uiverse.io by Bodyhc - Tags: hover, hover effect, input effect  */
.input[type=text] {
  max-width: 180px;
  height: 20px;
  background-color: #fff;
  color: #242424;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  box-shadow: 0px 10px 20px -18px blue;
  border-bottom: 3px solid #0d14e9;
  transition: .10s ease;
}

.input[type=text]:hover {
  outline: 2px solid #0d14e9;
  max-width: 200px;
}

.input[type=text]:focus {
  border-bottom: 3px solid #0d14e9;
  border-radius: 5px 5px 2px 2px;
  transform: scale(1.1);
}
```
