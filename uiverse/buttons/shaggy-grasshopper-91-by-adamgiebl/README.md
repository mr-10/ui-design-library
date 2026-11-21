# Shaggy Grasshopper 91

A button UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/shaggy-grasshopper-91

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: icon, button

Colors: #14a73e98, #ad5389

Fonts: inherit

Spacing and radius: 20em

## Source Code

### index.html

```html
<button class="cssbuttons-io-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
  <span>Add</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: icon, button */
.cssbuttons-io-button {
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  background: #ad5389;
  background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
}

.cssbuttons-io-button svg {
  margin-right: 6px;
}

.cssbuttons-io-button:hover {
  box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.cssbuttons-io-button:active {
  box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}
```
