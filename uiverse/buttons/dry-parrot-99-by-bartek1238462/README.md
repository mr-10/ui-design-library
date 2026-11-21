# Dry Parrot 99

A button UI element from Uiverse.io by Bartek1238462.

Source: https://uiverse.io/Bartek1238462/dry-parrot-99

Author: Bartek1238462

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, neon, hover effect

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 25px

## Source Code

### index.html

```html
<button class="button">
  <p class="text-inside">HOVER ME</p>
</button>
```

### styles.css

```css
/* From Uiverse.io by Bartek1238462 - Tags: button, hover, neon, hover effect */
.button {
  width: 120px;
  height: 40px;
  background-color: rgb(0, 0, 0);
  border: 3px solid rgb(0, 0, 0);
  color: white;
  border-radius: 25px;
  transition: 1.5s;
}

text-inside. {
  font-weight: bold;
}

.button:hover {
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px
,rgba(240, 46, 170, 0.4) 5px -5px, rgba(240, 46, 170, 0.3) 10px -10px, rgba(240, 46, 170, 0.2) 15px -15px, rgba(240, 46, 170, 0.1) 20px -20px, rgba(240, 46, 170, 0.05) 25px -25px
,rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px
,rgba(240, 46, 170, 0.4) -5px -5px, rgba(240, 46, 170, 0.3) -10px -10px, rgba(240, 46, 170, 0.2) -15px -15px, rgba(240, 46, 170, 0.1) -20px -20px, rgba(240, 46, 170, 0.05) -25px -25px;
  background-color: rgba(240, 46, 170, 0.4);
  color: rgb(56, 0, 36);
  border: 2px solid white;
  transform: scale(1.2,1.2);
}
```
