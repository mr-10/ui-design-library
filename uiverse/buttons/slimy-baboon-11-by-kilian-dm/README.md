# Slimy Baboon 11

A button UI element from Uiverse.io by Kilian-DM.

Source: https://uiverse.io/Kilian-DM/slimy-baboon-11

Author: Kilian-DM

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, button

Colors: #8e44ad, #9b59b6, #e74c3c, #fff

Fonts: See styles.css

Spacing and radius: 0.25em

## Source Code

### index.html

```html
<button class="button-3d">button</button>
```

### styles.css

```css
/* From Uiverse.io by Kilian-DM - Tags: 3d, button */
.button-3d {
  display: inline-block;
  padding: 0.5em 1em;
  font-size: 1.06em;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: #8e44ad;
  border: none;
  border-radius: 0.25em;
  box-shadow: 0 0.15em 0.3em rgba(0, 0, 0, 0.3);
  transform: perspective(1em) rotateX(-1deg) rotateY(1deg);
  transition: all 0.2s ease-in-out;
}

.button-3d:hover {
  transform: perspective(1em) rotateX(-3deg) rotateY(3deg) translateY(-0.05em);
  background-color: #9b59b6;
  box-shadow: 0 0.3em 0.6em rgba(0, 0, 0, 0.3);
}

.button-3d:focus,
.button-3d:active {
  transform: perspective(1em) rotateX(-3deg) rotateY(3deg) translateY(-0.05em);
  background-color: #e74c3c;
  box-shadow: 0 0.3em 0.6em rgba(0, 0, 0, 0.3);
  outline: none;
}
```
