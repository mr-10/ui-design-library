# Unlucky Cat 70

A button UI element from Uiverse.io by gauravsharmadriveit.

Source: https://uiverse.io/gauravsharmadriveit/unlucky-cat-70

Author: gauravsharmadriveit

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, active, animated

Colors: #0668c9, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by gauravsharmadriveit - Tags: button, active, animated */
.button {
  font-weight: 600;
  display: inline-block;
  position: relative;
  border: 3px solid #fff;
  padding: 15px 60px;
  font-size: 16px;
}

.button::after, .button::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  transition: .5s;
}

button::after {
  top: -3px;
  left: -3px;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

button::before {
  bottom: -3px;
  right: -3px;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

button:hover {
  color: #0668C9;
  cursor: pointer;
}

button:hover::after,
button:hover::before {
  width: calc(50% + 3px);
  height: calc(50% + 3px);
  border-color: #0668C9;
}
```
