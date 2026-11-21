# Sweet Vampirebat 42

A button UI element from Uiverse.io by elijahgummer.

Source: https://uiverse.io/elijahgummer/sweet-vampirebat-42

Author: elijahgummer

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, button, emoji, minimalistic, ¯\_(ツ)_/¯

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<span
  data-active-content="🤨"
  data-hover-content="😑"
  data-content="😐"
  class="💀"
></span>
```

### styles.css

```css
/* From Uiverse.io by elijahgummer  - Tags: simple, button, emoji, minimalistic, ¯\_(ツ)_/¯ */
.💀 {
  font-size: 48px;
}

.💀:after {
  content: attr(data-content);
}

.💀:hover:after {
  content: attr(data-hover-content);
}

.💀:active:after {
  content: attr(data-active-content);
}
```
