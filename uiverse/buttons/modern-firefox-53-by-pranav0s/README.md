# Modern Firefox 53

A button UI element from Uiverse.io by pranav0s.

Source: https://uiverse.io/pranav0s/modern-firefox-53

Author: pranav0s

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #880088, #aa2068, #cc3f47, #de6f3d, #f09f33, #fff

Fonts: See styles.css

Spacing and radius: 30px

## Source Code

### index.html

```html
<button class="button">Button</button>
```

### styles.css

```css
/* From Uiverse.io by pranav0s  - Tags: button */
.button {
  width: fit-content;
  display: flex;
  padding: 1.2em 1rem;
  cursor: pointer;
  gap: 0.4rem;
  font-weight: bold;
  border-radius: 30px;
  text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
  background: linear-gradient(
      15deg,
      #880088,
      #aa2068,
      #cc3f47,
      #de6f3d,
      #f09f33,
      #de6f3d,
      #cc3f47,
      #aa2068,
      #880088
    )
    no-repeat;
  background-size: 300%;
  color: #fff;
  border: none;
  background-position: left center;
  box-shadow: 0 30px 10px -20px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
}

.button:hover {
  background-size: 320%;
  background-position: right center;
}

.button:hover svg {
  fill: #fff;
}

.button svg {
  width: 23px;
  fill: #f09f33;
  transition: 0.3s ease;
}
```
