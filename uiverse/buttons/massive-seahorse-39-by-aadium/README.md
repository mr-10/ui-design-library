# Massive Seahorse 39

A button UI element from Uiverse.io by aadium.

Source: https://uiverse.io/aadium/massive-seahorse-39

Author: aadium

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, dropdown, menu button

Colors: #212121, #4caf50

Fonts: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

Spacing and radius: 0px 0px 13px 13px, 0px 13px 0px 0px, 0px 15px 15px 15px, 15px, 15px 15px 0px 0px

## Source Code

### index.html

```html
<div class="paste-button">
  <button class="button">Paste &nbsp; ▼</button>
  <div class="dropdown-content">
    <a id="top" href="#">Keep source formatting</a>
    <a id="middle" href="#">Merge formatting</a>
    <a id="bottom" href="#">Keep text only</a>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by aadium - Tags: button, dropdown, menu button  */
.paste-button {
  position: relative;
  display: block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.button {
  background-color: #4CAF50;
  color: #212121;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 15px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  font-size: 13px;
  position: absolute;
  z-index: 1;
  min-width: 200px;
  background-color: #212121;
  border: 2px solid #4CAF50;
  border-radius: 0px 15px 15px 15px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
  color: #4CAF50;
  padding: 8px 10px;
  text-decoration: none;
  display: block;
  transition: 0.1s;
}

.dropdown-content a:hover {
  background-color: #4CAF50;
  color: #212121;
}

.dropdown-content a:focus {
  background-color: #212121;
  color: #4CAF50;
}

.dropdown-content #top:hover {
  border-radius: 0px 13px 0px 0px;
}

.dropdown-content #bottom:hover {
  border-radius: 0px 0px 13px 13px;
}

.paste-button:hover button {
  border-radius: 15px 15px 0px 0px;
}

.paste-button:hover .dropdown-content {
  display: block;
}
```
