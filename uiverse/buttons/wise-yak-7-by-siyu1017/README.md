# Wise Yak 7

A button UI element from Uiverse.io by Siyu1017.

Source: https://uiverse.io/Siyu1017/wise-yak-7

Author: Siyu1017

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, awesome

Colors: #2bf46e, #2bf46e23, #2bf46e67, #e5fb6a, #e5fb6a23, #e5fb6a67

Fonts: See styles.css

Spacing and radius: 0.75rem

## Source Code

### index.html

```html
<button class="button">Awesome Button</button>
```

### styles.css

```css
/* From Uiverse.io by Siyu1017  - Tags: button, awesome */
.button {
  --color-1: #e5fb6a;
  --color-2: #2bf46e;
  --color-1-shadow: #e5fb6a23;
  --color-2-shadow: #2bf46e23;
  --color-1-shadow-focus: #e5fb6a67;
  --color-2-shadow-focus: #2bf46e67;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  border: 0;
  font-size: 1rem;
  background-image: linear-gradient(
    to right bottom,
    var(--color-1) 0%,
    var(--color-2) 100%
  );
  box-shadow:
    -4px -4px 16px 8px var(--color-1-shadow),
    4px 4px 16px 8px var(--color-2-shadow);
  transition: all 0.3s cubic-bezier(0.6, 0.12, 0.39, 0.83);
}

.button:hover,
.button:active,
.button:focus,
.button:focus-visible,
.button:focus-within {
  box-shadow:
    -4px -4px 32px 4px var(--color-1-shadow-focus),
    4px 4px 32px 4px var(--color-2-shadow-focus);
}

.button:hover {
  filter: contrast(1.25);
}
```
