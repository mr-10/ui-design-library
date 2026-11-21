# Polite Frog 59

A button UI element from Uiverse.io by Programming-School-Pro-Coding.

Source: https://uiverse.io/Programming-School-Pro-Coding/polite-frog-59

Author: Programming-School-Pro-Coding

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #f6d365, #fda085

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<button> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by Programming-School-Pro-Coding - Tags: button */
button {
  --c1: #f6d365;
  --c2: #fda085;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background: linear-gradient(90deg, var(--c1, #f6d365), var(--c2, #fda085) 51%, var(--c1, #f6d365)) var(--x, 0)/ 200%;
  color: white;
  border-radius: 20px;
  outline: none;
}

button:hover {
  --x: 100%;
}
```
