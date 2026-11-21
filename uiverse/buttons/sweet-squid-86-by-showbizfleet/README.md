# Sweet Squid 86

A button UI element from Uiverse.io by Showbizfleet.

Source: https://uiverse.io/Showbizfleet/sweet-squid-86

Author: Showbizfleet

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #009688, #00bcd4, #03a9f4, #2196f3, #4caf50, #8bc34a, #9c27b0, #f44336, #ff9800, #ffc107

Fonts: 'Montserrat', sans-serif

Spacing and radius: 5px

## Source Code

### index.html

```html
<button>
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by Showbizfleet - Tags: button */
button {
  height: 50px;
  margin: 5px;
  width: 120px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background: linear-gradient(145deg, #9c27b0, #f44336, #ff9800, #ffc107, #8bc34a, #4caf50, #2196f3, #03a9f4, #00bcd4, #009688);
  background-size: 200%;
  background-position: 0%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25), inset 0px -1px 0px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;
}

button:hover {
  background-position: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25), inset 0px -2px 0px rgba(255, 255, 255, 0.2);
}

button:focus {
  outline: none;
}

button:active {
  background-size: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), inset 0px -1px 0px rgba(255, 255, 255, 0.2);
}
```
