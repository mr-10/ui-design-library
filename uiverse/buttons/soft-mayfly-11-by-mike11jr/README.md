# Soft Mayfly 11

A button UI element from Uiverse.io by Mike11jr.

Source: https://uiverse.io/Mike11jr/soft-mayfly-11

Author: Mike11jr

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #171717, #39a2db, #f85959, #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="btn">Hover Me!
</button>
```

### styles.css

```css
/* From Uiverse.io by Mike11jr - Tags: button */
.btn {
 width: 130px;
 height: 40px;
 font-size: 1.1em;
 cursor: pointer;
 background-color: #171717;
 color: #fff;
 border: none;
 border-radius: 5px;
 transition: all .4s;
}

.btn:hover {
 border-radius: 5px;
 transform: translateY(-10px);
 box-shadow: 0 7px 0 -2px #f85959,
  0 15px 0 -4px #39a2db,
  0 16px 10px -3px #39a2db;
}

.btn:active {
 transition: all 0.2s;
 transform: translateY(-5px);
 box-shadow: 0 2px 0 -2px #f85959,
  0 8px 0 -4px #39a2db,
  0 12px 10px -3px #39a2db;
}
```
