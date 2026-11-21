# Red Goat 98

A button UI element from Uiverse.io by barisdogansutcu.

Source: https://uiverse.io/barisdogansutcu/red-goat-98

Author: barisdogansutcu

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, checkbox, input, bold, italic, underline

Colors: #29429b, #29429b34

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<div class="button-options">
  <div class="content">
    <input name="boldInput" id="boldInput" hidden="" type="checkbox" />
    <label class="label-layout" for="boldInput">
      <b>B</b>
    </label>

    <input name="italicInput" id="italicInput" hidden="" type="checkbox" />
    <label class="label-layout" for="italicInput">
      <i>i</i>
    </label>

    <input
      name="underlineInput"
      id="underlineInput"
      hidden=""
      type="checkbox"
    />
    <label class="label-layout" for="underlineInput">
      <u>U</u>
    </label>
    <span class="title">L❤VE FRONT-END</span>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by barisdogansutcu  - Tags: button, checkbox, input, bold, italic, underline */
.button-options .content {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #29429b;
  border-radius: 4px;
  position: relative;
}
.button-options .content .label-layout {
  min-width: 45px;
  height: 45px;
  display: flexa;
  align-items: center;
  justify-content: center;
}
.button-options .content .label-layout :is(b, i, u) {
  display: grid;
  place-content: center;
  height: 100%;
  color: #29429b;
  font-size: 17px;
  line-height: 1;
  cursor: pointer;
}
.button-options .content .label-layout[for="italicInput"] {
  border-left: solid 2px #29429b;
  border-right: solid 2px #29429b;
  min-width: 49px;
}
.button-options .content input[type="checkbox"]:checked + .label-layout {
  background-color: #29429b34;
}
#boldInput:checked ~ .title {
  font-weight: bold;
}
#italicInput:checked ~ .title {
  font-style: italic;
}
#underlineInput:checked ~ .title {
  text-decoration: underline;
}
.button-options .title {
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  position: absolute;
  bottom: 0;
  top: 2px;
  transform: translateY(100%);
  color: #29429b;
}
```
