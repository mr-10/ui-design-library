# Selfish Bulldog 79

A input UI element from Uiverse.io by shadowmurphy.

Source: https://uiverse.io/shadowmurphy/selfish-bulldog-79

Author: shadowmurphy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, neumorphism, skeuomorphism, input

Colors: #1e1f20, #2d2d2d, #303030, #313131, #4cc2ff, #9a9a9a

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<input
  type="text"
  name="text"
  class="search-bar"
  placeholder="Type something"
/>
```

### styles.css

```css
/* From Uiverse.io by shadowmurphy  - Tags: simple, material design, neumorphism, skeuomorphism, input */
.search-bar {
  width: 200px;
  height: 35px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #303030;
  border-bottom: 2px solid #9a9a9a;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #2d2d2d;
  color: white;
  transition: all 0.3s ease;
}

.search-bar::placeholder {
  color: #9a9a9a;
}

.search-bar:hover {
  background-color: #313131;
}

.search-bar:active,
.search-bar:focus {
  background-color: #1e1f20;
  border: 1px solid #2d2d2d;
  border-bottom: 2px solid #4cc2ff;
}
```
