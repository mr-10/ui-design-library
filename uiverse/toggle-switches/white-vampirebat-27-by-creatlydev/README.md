# White Vampirebat 27

A toggle switch UI element from Uiverse.io by Creatlydev.

Source: https://uiverse.io/Creatlydev/white-vampirebat-27

Author: Creatlydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, creative, toggle switch

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 0% 100% 0% 100% / 0% 27% 73% 100%, 100% 0% 100% 0% / 100% 0% 100% 0%, 4rem, 50%

## Source Code

### index.html

```html
<input type="checkbox" name="check-toggle" id="checkbox" hidden="">
        <label for="checkbox" class="toggle">
            <div class="toggle__circle"></div>
        </label>
```

### styles.css

```css
/* From Uiverse.io by Creatlydev - Tags: switch, creative, toggle switch */
.toggle {
  --bg-toggle: hsl(0, 0%, 96%);
  --bg-circle: hsl(96, 85%, 34%);
  width: 120px;
  height: 60px;
  background-color: var(--bg-toggle);
  box-shadow: 0 .3rem 5rem 0 rgba(125, 125, 125, 0.25);
  border-radius: 4rem;
  display: flex;
  align-items: center;
  padding: 0 .3rem;
  transition: background-color 400ms;
}

.toggle__circle {
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: var(--bg-circle);
  border-radius: 50%;
  position: relative;
  transition: margin 400ms ease-in-out, background-color 1000ms;
}

.toggle__circle::after,
.toggle__circle::before {
  content: '';
  position: absolute;
  background-color: var(--bg-toggle);
  bottom: 118%;
  transform-origin: bottom left;
}

.toggle__circle::before {
  width: 15px;
  height: 25px;
  left: 32%;
  border-radius: 0% 100% 0% 100% / 0% 27% 73% 100%;
  transform: translateX(-70%) rotate(-2deg);
}

.toggle__circle::after {
  width: 25px;
  height: 30px;
  left: 48%;
  border-radius: 100% 0% 100% 0% / 100% 0% 100% 0%;
  transform: rotate(-20deg);
}

#checkbox:checked + .toggle > .toggle__circle {
  margin-left: calc(120px - (.3rem * 2) - 50px);
}

#checkbox:checked + .toggle {
  --bg-toggle: hsl(96, 85%, 34%);
  --bg-circle: hsl(0, 0%, 96%);
}
```
