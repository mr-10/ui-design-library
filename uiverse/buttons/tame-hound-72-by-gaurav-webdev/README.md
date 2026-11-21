# Tame Hound 72

A button UI element from Uiverse.io by Gaurav-WebDev.

Source: https://uiverse.io/Gaurav-WebDev/tame-hound-72

Author: Gaurav-WebDev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover effect, cool btn

Colors: #008080, #252525, #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="button type1">
</button>
```

### styles.css

```css
/* From Uiverse.io by Gaurav-WebDev - Tags: button, hover effect, cool btn */
.button {
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.button:hover {
  box-shadow: .5px .5px 150px #252525;
}

.type1::after {
  content: "Thanks";
  height: 50px;
  width: 150px;
  background-color: #008080;
  color: #fff;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(50px);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.type1::before {
  content: "Hover Me";
  height: 50px;
  width: 150px;
  background-color: #fff;
  color: #008080;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(0px) scale(1.2);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.type1:hover::after {
  transform: translateY(0) scale(1.2);
}

.type1:hover::before {
  transform: translateY(-50px) scale(0) rotate(120deg);
}
```
