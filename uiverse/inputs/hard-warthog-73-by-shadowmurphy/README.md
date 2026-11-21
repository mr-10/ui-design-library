# Hard Warthog 73

A input UI element from Uiverse.io by shadowmurphy.

Source: https://uiverse.io/shadowmurphy/hard-warthog-73

Author: shadowmurphy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: blue, input, search

Colors: #4a9dec, #f3f3f3

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<input class="input" placeholder="text">
```

### styles.css

```css
/* From Uiverse.io by shadowmurphy - Tags: blue, input, search */
.input {
  border: 2px solid transparent;
  width: 15em;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #F3F3F3;
  border-radius: 10px;
  transition: all 0.5s;
}

.input:hover,
.input:focus {
  border: 2px solid #4A9DEC;
  box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
  background-color: white;
}
```
