# Smooth Mouse 22

A button UI element from Uiverse.io by SanketSuryawanshi.

Source: https://uiverse.io/SanketSuryawanshi/smooth-mouse-22

Author: SanketSuryawanshi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #222222, #3992e6, #fff

Fonts: inherit

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="main_div">
  <button>Sign up</button>
</div>
```

### styles.css

```css
/* From Uiverse.io by SanketSuryawanshi - Tags: button */
.main_div {
 --color: #3992e6;
 position: relative;
 z-index: 1;
}

.main_div::before {
 content: '';
 position: absolute;
 width: 30px;
 height: 30px;
 background: transparent;
 top: -7px;
 left: -7px;
 z-index: -5;
 border-top: 3px solid var(--color);
 border-left: 3px solid var(--color);
 transition: 0.5s;
}

.main_div::after {
 content: '';
 position: absolute;
 width: 30px;
 height: 30px;
 background: transparent;
 bottom: -7px;
 right: -7px;
 z-index: -5;
 border-right: 3px solid var(--color);
 border-bottom: 3px solid var(--color);
 transition: 0.5s;
}

.main_div:hover::before {
 width: 100%;
 height: 100%;
}

.main_div:hover::after {
 width: 100%;
 height: 100%;
}

.main_div button {
 padding: 0.7em 2em;
 font-size: 16px;
 background: #222222;
 color: #fff;
 border: none;
 cursor: pointer;
 font-family: inherit;
}
```
