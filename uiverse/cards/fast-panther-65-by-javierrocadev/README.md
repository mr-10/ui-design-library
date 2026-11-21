# Fast Panther 65

A card UI element from Uiverse.io by Javierrocadev.

Source: https://uiverse.io/Javierrocadev/fast-panther-65

Author: Javierrocadev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: list, blue, card, hover, dark, hover effect, card hover, mozilla

Colors: #004d92, #3775bb, #8cb4ff

Fonts: See styles.css

Spacing and radius: 15px

## Source Code

### index.html

```html
<div class="card">
  <span>In this article</span>
  <div class="card__container">
   <p class="element">Try it</p> 
   <p class="element">Syntax</p> 
   <p class="element active">Formal definition</p> 
   <p class="element">Formal syntax</p> 
   <p class="element">Examples</p> 
   <p class="element">See also</p> 
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Javierrocadev - Tags: list, blue, card, hover, dark, hover effect, card hover, mozilla */
.card {
  width: 250px;
  height: 290px;
  border-radius: 15px;
  background: rgb(27, 26, 26);
  color: white;
  font-weight: 600;
  font-size: 1.2em;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -5px 5px 1px 0px #004d92;
}

.element {
  color: grey;
  font-size: .8em;
  padding: 6px 15px;
  border-left: 2px solid grey;
  cursor: pointer;
}

.active {
  background-color: #004d92;
  border-left: 2px solid #8cb4ff;
  color: azure;
}

.element:hover:not(.active) {
  color: #3775bb;
}
```
