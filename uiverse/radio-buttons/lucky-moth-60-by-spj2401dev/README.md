# Lucky Moth 60

A radio button UI element from Uiverse.io by spj2401Dev.

Source: https://uiverse.io/spj2401Dev/lucky-moth-60

Author: spj2401Dev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: #000000, #02375a, #2b426d, #385c7e

Fonts: See styles.css

Spacing and radius: 15px

## Source Code

### index.html

```html
<fieldset>
  <legend>Frameworks</legend>

  <div class="button-group">
    <input type="radio" id="svelt" name="frameworks" checked="" />
    <label for="svelt">Svelt</label>
  </div>

  <div class="button-group">
    <input type="radio" id="react" name="frameworks" />
    <label for="react">React</label>
  </div>

  <div class="button-group">
    <input type="radio" id="vue" name="frameworks" />
    <label for="vue">Vue</label>
  </div>
</fieldset>
```

### styles.css

```css
/* From Uiverse.io by spj2401Dev  - Tags:  */
.button-group {
  flex-grow: 1;
  margin: auto;
}

.button-group input[type="radio"] {
  display: none;
}

.button-group label {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #2b426d;
  background-color: #385c7e;
  color: white;
  border-radius: 15px;
  transition: all ease 0.2s;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  width: 90px;
  font-size: 13px;
  margin: 5px;
  box-shadow: 0px 0px 50px -15px #000000;
}

.button-group input[type="radio"]:checked + label {
  background-color: white;
  color: #02375a;
  border: 1px solid #2b426d;
}

fieldset {
  border: 0;
  display: flex;
}
```
