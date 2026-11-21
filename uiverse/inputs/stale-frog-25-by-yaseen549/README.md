# Stale Frog 25

A input UI element from Uiverse.io by Yaseen549.

Source: https://uiverse.io/Yaseen549/stale-frog-25

Author: Yaseen549

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, input

Colors: #c5c5c5, #e8e8e8, #ffffff

Fonts: See styles.css

Spacing and radius: 15px

## Source Code

### index.html

```html
<input type="text" name="text" class="input" placeholder="Type here!">
```

### styles.css

```css
/* From Uiverse.io by Yaseen549 - Tags: neumorphism, input */
.input {
 border: none;
 border-radius: 15px;
 padding: 15px;
 background-color: #e8e8e8;
 box-shadow: 6px 6px 12px #ffffff,
             -6px -6px 12px #c5c5c5;
 font-size: medium;
 font-weight: bold;
 max-width: 200px;
}

.input:focus {
 outline-color: white;
 place-content: "Enter your message!";
}
```
