# Silent Cobra 22

A button UI element from Uiverse.io by themarcBlanchard.

Source: https://uiverse.io/themarcBlanchard/silent-cobra-22

Author: themarcBlanchard

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #1752e5, #1a5cff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button type="button">
  Hover
</button>
```

### styles.css

```css
/* From Uiverse.io by themarcBlanchard - Tags: button */
button {
  padding: .5rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  border: 1px solid black;
}

button:hover {
  background-color: #1a5cff;
  color: white;
  transform: scale(1.1);
  font-weight: 700;
  -webkit-box-shadow: 7px 7px 23px -12px rgba(26,91,255,1);
  -moz-box-shadow: 7px 7px 23px -12px rgba(26,91,255,1);
  box-shadow: 7px 7px 23px -12px rgba(26,91,255,1);
  border: none;
}

button:active {
  background-color: #1752e5;
}
```
