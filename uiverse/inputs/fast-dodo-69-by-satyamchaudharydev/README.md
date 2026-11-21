# Fast Dodo 69

A input UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/fast-dodo-69

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #4985e01f, #5891ff, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="form">
  <input class="input" placeholder="Type your text" required="" type="text">
  <span class="input-border"></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: input */
.form {
 --width-of-input: 200px;
 --border-height: 1px;
 --border-before-color: rgba(221, 221, 221, 0.39);
 --border-after-color: #5891ff;
 --input-hovered-color: #4985e01f;
 position: relative;
 width: var(--width-of-input);
}
/* styling of Input */
.input {
 color: #fff;
 font-size: 0.9rem;
 background-color: transparent;
 width: 100%;
 box-sizing: border-box;
 padding-inline: 0.5em;
 padding-block: 0.7em;
 border: none;
 border-bottom: var(--border-height) solid var(--border-before-color);
}
/* styling of animated border */
.input-border {
 position: absolute;
 background: var(--border-after-color);
 width: 0%;
 height: 2px;
 bottom: 0;
 left: 0;
 transition: 0.3s;
}
/* Hover on Input */
input:hover {
 background: var(--input-hovered-color);
}

input:focus {
 outline: none;
}
/* here is code of animated border */
input:focus ~ .input-border {
 width: 100%;
}
/* === if you want to do animated border on typing === */
/* remove input:focus code and uncomment below code */
/* input:valid ~ .input-border{
  width: 100%;
} */
```
