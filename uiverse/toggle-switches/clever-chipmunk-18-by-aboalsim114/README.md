# Clever Chipmunk 18

A toggle switch UI element from Uiverse.io by aboalsim114.

Source: https://uiverse.io/aboalsim114/clever-chipmunk-18

Author: aboalsim114

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #38b8a7, #f2f2f2, #f44, #fff

Fonts: See styles.css

Spacing and radius: 3em, 50%

## Source Code

### index.html

```html
<label class="toggle-switch" for="toggle-switch">
  <input type="checkbox" id="toggle-switch">
  <div class="slider"></div>
</label>
```

### styles.css

```css
/* From Uiverse.io by aboalsim114 - Tags: switch */
/* Toggle Switch */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 5em;
  height: 2.5em;
  font-size: 1em;
  border-radius: 3em;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.toggle-switch input[type="checkbox"] {
  display: none;
}

.toggle-switch label {
  display: block;
  width: 100%;
  height: 100%;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 3em;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.slider::before {
  position: absolute;
  content: "";
  width: 2em;
  height: 2em;
  left: 0.25em;
  bottom: 0.25em;
  background-color: #38b8a7;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), background-color 0.3s ease;
  transform: perspective(800px) rotateY(0deg) rotateX(0deg);
}

.slider::after {
  position: absolute;
  content: "";
  width: 0.8em;
  height: 0.8em;
  left: 50%;
  bottom: 0.5em;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.3);
  transform: translate(-50%, 50%) scale(0);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}

.toggle-switch input[type="checkbox"]:checked + .slider {
  background-color: #f2f2f2;
  box-shadow: 0 0.3em 0.3em rgba(244, 68, 68, 0.2);
}

.toggle-switch input[type="checkbox"]:checked + .slider::before {
  transform: translateX(2.5em) perspective(800px) rotateY(180deg) rotateX(360deg);
  background-color: #f44;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.toggle-switch input[type="checkbox"]:checked + .slider::after {
  transform: translate(-50%, 50%) scale(1);
}
```
