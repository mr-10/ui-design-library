# Itchy Octopus 28

A button UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/itchy-octopus-28

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: blue, button, join now, buttons

Colors: #0000ff, #fff, #ffffff

Fonts: See styles.css

Spacing and radius: 3px, 5px

## Source Code

### index.html

```html
<button class="button">
 ㅤ JOIN NOW
</button>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: blue, button, join now, buttons */
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #0000FF;
  font-size: 17px;
  border-radius: 5px;
  width: 160px;
  height: 40px;
  border: 1px solid #0000FF;
  position: relative;
  transition: 0.3s;
  background-color: #ffffff;
  font-weight: 600;
}

.button::before {
  content: "FREE";
  display: block;
  font-size: 13px;
  background-color: #0000FF;
  color: #fff;
  border-radius: 3px;
  padding: 3px 5px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-5px, -30%);
  transition: .3s;
}

.button:hover::before {
  transform: translate(-5px, -50%);
}
```
