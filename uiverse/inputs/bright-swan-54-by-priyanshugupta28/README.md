# Bright Swan 54

A input UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/bright-swan-54

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, range, input effect

Colors: #0093e9, #4158d0, #4900f5, #4c00ff, #80d0c7, #c850c0, #ffcc70

Fonts: See styles.css

Spacing and radius: 50%, 5px

## Source Code

### index.html

```html
<input id="myRange" class="slider" value="50" max="100" min="0" type="range">
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28 - Tags: input, range, input effect  */
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #4c00ff;
  background-image: linear-gradient(160deg, #4900f5 0%, #80D0C7 100%);
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  cursor: pointer;
}
```
