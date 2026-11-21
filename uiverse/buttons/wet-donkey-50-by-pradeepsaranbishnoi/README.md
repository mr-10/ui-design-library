# Wet Donkey 50

A button UI element from Uiverse.io by Pradeepsaranbishnoi.

Source: https://uiverse.io/Pradeepsaranbishnoi/wet-donkey-50

Author: Pradeepsaranbishnoi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, claymorphism, emoji

Colors: #0470e3, #87bfd8, #f0f7fa

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="mybutton">
<button class="button" type="button">
   <span>Hello 😊</span>
</button>
</div>
```

### styles.css

```css
/* From Uiverse.io by Pradeepsaranbishnoi - Tags: button, claymorphism, emoji */
.mybutton {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: .5em;
  position: relative;
  border-radius: 50px;
  padding: 16px 24px;
  background-color: #f0f7fa;
  box-shadow: inset 0 -4px 8px #87bfd8, 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #0470e3;
  transition: transform 0.4s cubic-bezier(0.55, 1, 0.15, 1);
  will-change: transform;
}

.button:active {
  transform: scale(0.92);
}

.button:active::after {
  opacity: 1;
  outline: none;
  border: 0;
}

.button::after {
  content: '';
  position: absolute;
  inset: 0;
  border-image-slice: 50%;
  border-image-width: 40px;
  border-style: solid;
  transform: scale(1.04, 1.08);
  opacity: 0;
  border: 0;
  transition-property: opacity;
  transition-duration: .4s;
  transition-timing-function: cubic-bezier(0.55, 1, 0.15, 1);
  will-change: transform;
}
```
