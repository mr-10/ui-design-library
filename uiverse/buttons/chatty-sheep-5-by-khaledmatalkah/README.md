# Chatty Sheep 5

A button UI element from Uiverse.io by KhaledMatalkah.

Source: https://uiverse.io/KhaledMatalkah/chatty-sheep-5

Author: KhaledMatalkah

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, ease

Colors: #76a6ca, #ffffff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="button">
  Hover Me!
</button>
```

### styles.css

```css
/* From Uiverse.io by KhaledMatalkah - Tags: button, hover, ease */
.button {
  background-color: transparent;
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease-in, transform 0.3s ease;
  font-size: 18px;
  font-weight: bold;
  border: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
}

.button:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #76a6ca;
  opacity: 0;
  transition: width 0.7s ease-in-out, opacity 0.9s ease;
}

.button:hover {
  transform: scale(1.05);
}

.button:hover:before {
  width: 100%;
  opacity: 0.6;
}

.button:active {
  background-color: #76a6ca;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
  transform: scale(0.98);
}
```
