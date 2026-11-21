# Dangerous Sheep 52

A button UI element from Uiverse.io by learnMyHobby.

Source: https://uiverse.io/learnMyHobby/dangerous-sheep-52

Author: learnMyHobby

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #0004, #00f, #0f0, #2e2e2e, #525296, #91155d, #fb0094, #ff0

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>
  <span>Hover</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by learnMyHobby - Tags: button */
button {
 position: relative;
 text-decoration: none;
 font-size: 15px;
 text-transform: uppercase;
 letter-spacing: 5px;
 line-height: 48px;
 width: 160px;
 font-weight: bold;
 height: 55px;
 -webkit-box-reflect: bottom 1px linear-gradient(transparent, #0004);
}

button span {
 position: absolute;
 display: flex;
 justify-content: center;
 top: 4px;
 right: 4px;
 bottom: 4px;
 left: 4px;
 text-align: center;
 background: #2E2E2E;
 color: rgba(255, 255, 255, 0.781);
 transition: 0.5s;
 z-index: 1;
}

button:hover span {
 color: rgba(255,255,255,1);
}

button::before {
 content: '';
 position: absolute;
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 background-size: 400%;
 opacity: 0;
 transition: 0.5s;
 background: linear-gradient(45deg,#91155d,#525296,#0f0,#ff0,#fb0094,#00f,#0f0,#ff0);
 animation: animate123 20% linear infinte;
}

button::after {
 content: '';
 position: absolute;
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 background-size: 400%;
 filter: blur(20px);
 transition: 0.5s;
 background: linear-gradient(45deg,#91155d,#525296,#0f0,#ff0,#fb0094,#00f,#0f0,#ff0);
 animation: animate123 20% linear infinte;
}

button:hover::before,
button:hover::after {
 opacity: 1;
}

@keyframes animate123 {
 0% {
  background-position: 0 0;
 }

 50% {
  background-position: 300% 0;
 }

 100% {
  background-position: 0 0;
 }
}

button span::before {
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 50%;
 background: rgba(255,255,255,0.1);
}
```
