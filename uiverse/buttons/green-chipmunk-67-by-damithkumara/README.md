# Green Chipmunk 67

A button UI element from Uiverse.io by Damithkumara.

Source: https://uiverse.io/Damithkumara/green-chipmunk-67

Author: Damithkumara

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #363636, #ff0

Fonts: inherit

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button><span></span>button</button>
```

### styles.css

```css
/* From Uiverse.io by Damithkumara - Tags: button */
button {
 padding: 0.9em 1.8em;
 text-transform: uppercase;
 text-decoration: none;
 letter-spacing: 4px;
 color: transparent;
 border: 3px solid #ff0;
 font-size: 14px;
 position: relative;
 font-family: inherit;
 background: transparent;
}

button::before {
 content: "button";
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: #363636;
 color: #ff0;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.5s;
}

button:hover::before {
 left: 100%;
 transform: scale(0) rotateY(360deg);
 opacity: 0;
}

button::after {
 content: "button";
 position: absolute;
 top: 0;
 left: -100%;
 width: 100%;
 height: 100%;
 background-color: #363636;
 color: #ff0;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.5s;
 transform: scale(0) rotateY(0deg);
 opacity: 0;
}

button:hover::after {
 left: 0;
 transform: scale(1) rotateY(360deg);
 opacity: 1;
}
```
