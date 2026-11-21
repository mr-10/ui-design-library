# Cowardly Lionfish 57

A loader UI element from Uiverse.io by Nadabasuony.

Source: https://uiverse.io/Nadabasuony/cowardly-lionfish-57

Author: Nadabasuony

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #f12711, #f24e13, #f36915, #f48c17, #f5af19

Fonts: See styles.css

Spacing and radius: 5em

## Source Code

### index.html

```html
<div class="loader">
  <div class="l"></div>
  <div class="l"></div>
  <div class="l"></div>
  <div class="l"></div>
  <div class="l"></div>
  <div class="l"></div>
  <div class="l"></div>
  <div class="l"></div>
  <div class="l"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Nadabasuony - Tags: loader */
.loader {
  display: flex;
}

.l,.l:nth-child(9) {
  margin: 0.15em;
  border-radius: 5em;
  width: 0.4em;
  background-color: #f12711;
  height: 3em;
  box-shadow: 1px 1px 4px black;
  animation: load_5186 cubic-bezier(.41,.44,.72,.69) 2s infinite;
}

.l:nth-child(2), 
.l:nth-child(8) {
  background-color: #f24e13;
  animation-delay: .25s;
}

.l:nth-child(3), 
.l:nth-child(7) {
  background-color: #f36915;
  animation-delay: .5s;
}

.l:nth-child(4), 
.l:nth-child(6) {
  background-color: #f48c17;
  animation-delay: .75s;
}

.l:nth-child(5) {
  background-color: #f5af19;
  animation-delay: 1s;
}

@keyframes load_5186 {
  0% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(-1);
  }
}
```
