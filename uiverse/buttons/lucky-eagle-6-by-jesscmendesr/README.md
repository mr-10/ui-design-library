# Lucky Eagle 6

A button UI element from Uiverse.io by JesscMendesr.

Source: https://uiverse.io/JesscMendesr/lucky-eagle-6

Author: JesscMendesr

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: transition, box-shadow

Colors: #f2e1c1

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by JesscMendesr - Tags: transition, box-shadow */
.button {
  font-size: 1rem;
  background-color: #F2E1C1 !important;
  transform: translateY(-0.10em);
  box-shadow: 3px 3px 0px rgba(55, 22, 22, 0.67);
  border: 1px solid rgba(55, 22, 22, 0.67);
  border-radius: 50px;
  padding: 0.75em 1.5em;
  transition: 0.2s;
  cursor: pointer;
}

button:hover {
  box-shadow: 4px 6px 0px rgba(55, 22, 22, 0.67);
  transform: translateY(-0.4em);
}

button:active {
  box-shadow: none;
  transform: translateY(0);
}
```
