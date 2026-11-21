# Loud Pug 70

A button UI element from Uiverse.io by Leoodaviid.

Source: https://uiverse.io/Leoodaviid/loud-pug-70

Author: Leoodaviid

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #1d1d1d, #71e0ef, #79efff

Fonts: See styles.css

Spacing and radius: 2rem

## Source Code

### index.html

```html
<button class="loading">
  <p>Loading...</p>
</button>
```

### styles.css

```css
/* From Uiverse.io by Leoodaviid - Tags: button */
button {
  position: relative;
  overflow: hidden;
  padding: 1rem 2.5rem 1rem 2.5rem;
  border: 0;
  border-radius: 2rem;
  font-size: 18px;
  font-weight: 500;
  background: transparent;
  color: #1d1d1d;
}

button:hover {
  cursor: wait;
}

button > p {
  position: relative;
  z-index: 3;
}

button::before,
button::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 300%;
  height: 100%;
  opacity: 0;
}

button::before {
  background: #79efff repeating-linear-gradient(50deg, transparent, transparent 10px, #71e0ef 10px, #71e0ef 20px);
}

button::after {
  z-index: 2;
  background: linear-gradient(#79efff 30%, transparent 100%);
}

button.loading::before,
button.loading::after {
  opacity: 1;
}

@keyframes loading_49100 {
  0% {
    translate: 25px 0;
  }

  100% {
    translate: -30px 0;
  }
}

button.loading::before {
  animation: loading_49100 0.6s infinite linear;
}
```
