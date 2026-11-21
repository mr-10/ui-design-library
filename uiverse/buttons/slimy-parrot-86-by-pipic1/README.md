# Slimy Parrot 86

A button UI element from Uiverse.io by pipic1.

Source: https://uiverse.io/pipic1/slimy-parrot-86

Author: pipic1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: skeuomorphism, button

Colors: #969faf, #cdcde6, #d5dbe4, #f8f8f8, #fff

Fonts: See styles.css

Spacing and radius: 3px

## Source Code

### index.html

```html
<button class="button">
  ctrl
</button>
```

### styles.css

```css
/* From Uiverse.io by pipic1 - Tags: skeuomorphism, button */
.button {
  --key-text-color: #969faf;
  --docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);
  --docsearch-key-gradient: linear-gradient(-225deg,#d5dbe4,#f8f8f8);
  border: none;
  background: var(--docsearch-key-gradient);
  border-radius: 3px;
  box-shadow: var(--docsearch-key-shadow);
  color: var(--key-text-color);
  height: 2.5em;
  text-align: center;
  padding: 0.6em;
  margin: 0 0.6em;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  min-width: 1em;
  line-height: 1em;
  user-select: none;
}
```
