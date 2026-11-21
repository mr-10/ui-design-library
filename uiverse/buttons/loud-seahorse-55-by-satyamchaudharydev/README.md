# Loud Seahorse 55

A button UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/loud-seahorse-55

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000, #ff90e8, #fff

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<button class="button">
    Hover me :)
</button>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: button */
/* inspired form gumroad website */
.button {
  --bg: #000;
  --hover-bg: #ff90e8;
  --hover-text: #000;
  color: #fff;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.8em 2em;
  background: var(--bg);
  transition: 0.2s;
}

.button:hover {
  color: var(--hover-text);
  transform: translate(-0.25rem,-0.25rem);
  background: var(--hover-bg);
  box-shadow: 0.25rem 0.25rem var(--bg);
}

.button:active {
  transform: translate(0);
  box-shadow: none;
}
```
