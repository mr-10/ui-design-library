# Massive Goat 19

A button UI element from Uiverse.io by gagan-gv.

Source: https://uiverse.io/gagan-gv/massive-goat-19

Author: gagan-gv

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #040f16, #2e2e2e3a, #f5f5f5

Fonts: Verdana, Geneva, Tahoma, sans-serif

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="btn">
    <span class="icon">
        <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
    </span>
    <span class="text">MENU</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by gagan-gv - Tags: button */
.btn {
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  background: #040f16;
  color: #f5f5f5;
}

.btn:hover {
  box-shadow: 0 0 20px 0px #2e2e2e3a;
}

.btn .icon {
  position: absolute;
  height: 40px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
}

.btn .text {
  transform: translateX(55px);
}

.btn:hover .icon {
  width: 175px;
}

.btn:hover .text {
  transition: all 0.5s;
  opacity: 0;
}

.btn:focus {
  outline: none;
}

.btn:active .icon {
  transform: scale(0.85);
}
```
