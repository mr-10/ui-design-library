# Soft Crab 61

A button UI element from Uiverse.io by alexreyes091.

Source: https://uiverse.io/alexreyes091/soft-crab-61

Author: alexreyes091

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: .5rem

## Source Code

### index.html

```html
<button class="btn"> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by alexreyes091 - Tags: button */
.btn {
 padding: 1rem 2rem;
 font-weight: 700;
 background: rgb(255, 255, 255);
 color: blueviolet;
 border-radius: .5rem;
 border-bottom: 2px solid blueviolet;
 border-right: 2px solid blueviolet;
 border-top: 2px solid white;
 border-left: 2px solid white;
 transition-duration: 1s;
 transition-property: border-top, 
    border-left, 
    border-bottom,
    border-right,
    box-shadow;
}

.btn:hover {
 border-top: 2px solid blueviolet;
 border-left: 2px solid blueviolet;
 border-bottom: 2px solid rgb(238, 103, 238);
 border-right: 2px solid rgb(238, 103, 238);
 box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px;
}
```
