# Smooth Fox 6

A toggle switch UI element from Uiverse.io by nikk7007.

Source: https://uiverse.io/nikk7007/smooth-fox-6

Author: nikk7007

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #009068, #e81b1b, #fff

Fonts: See styles.css

Spacing and radius: .2em

## Source Code

### index.html

```html
<label class="switch">
  <input type="checkbox" checked="">
</label>
```

### styles.css

```css
/* From Uiverse.io by nikk7007 - Tags: switch */
.switch {
 --false: #E81B1B;
 --true: #009068;
}

input[type=checkbox] {
 appearance: none;
 height: 2rem;
 width: 3.5rem;
 background-color: #fff;
 position: relative;
 border-radius: .2em;
 cursor: pointer;
}

input[type=checkbox]::before {
 content: '';
 display: block;
 height: 1.9em;
 width: 1.9em;
 transform: translate(-50%, -50%);
 position: absolute;
 top: 50%;
 left: calc(1.9em/2 + .3em);
 background-color: var(--false);
 border-radius: .2em;
 transition: .3s ease;
}

input[type=checkbox]:checked::before {
 background-color: var(--true);
 left: calc(100% - (1.9em/2 + .3em));
}
```
