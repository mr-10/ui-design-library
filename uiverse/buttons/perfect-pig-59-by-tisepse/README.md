# Perfect Pig 59

A button UI element from Uiverse.io by TISEPSE.

Source: https://uiverse.io/TISEPSE/perfect-pig-59

Author: TISEPSE

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: material design, black, button

Colors: #212121, #fefefe

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>
<a href="#"><span>Button</span></a> 
</button>
```

### styles.css

```css
/* From Uiverse.io by TISEPSE - Source: https://www.youtube.com/watch?v=B7Z6qERVTvM - Tags: material design, black, button */
a {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid #fefefe;
  text-transform: uppercase;
  color: #fefefe;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
}

a::before {
  content: '';
  position: absolute;
  top: 6px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - 12px);
  background-color: #212121;
  transition: 0.3s ease-in-out;
  transform: scaleY(1);
}

a:hover::before {
  transform: scaleY(0);
}

a::after {
  content: '';
  position: absolute;
  left: 6px;
  top: -2px;
  height: calc(100% + 4px);
  width: calc(100% - 12px);
  background-color: #212121;
  transition: 0.3s ease-in-out;
  transform: scaleX(1);
  transition-delay: 0.5s;
}

a:hover::after {
  transform: scaleX(0);
}

a span {
  position: relative;
  z-index: 3;
}

button {
  background-color: none;
  text-decoration: none;
  background-color: #212121;
  border: none;
}
```
