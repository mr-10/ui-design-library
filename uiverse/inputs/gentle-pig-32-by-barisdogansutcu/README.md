# Gentle Pig 32

A input UI element from Uiverse.io by barisdogansutcu.

Source: https://uiverse.io/barisdogansutcu/gentle-pig-32

Author: barisdogansutcu

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, password, key

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="password">
  <input maxlength="1" value="5" class="input" name="text" type="text" />
  <input maxlength="1" value="7" class="input" name="text" type="text" />
  <input maxlength="1" value="1" class="input" name="text" type="text" />
  <input maxlength="1" value="6" class="input" name="text" type="text" />
  <input maxlength="1" value="3" class="input" name="text" type="text" />
  <input maxlength="1" value="2" class="input" name="text" type="text" />
</div>
```

### styles.css

```css
/* From Uiverse.io by barisdogansutcu  - Tags: input, password, key */
.password {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.password input {
  width: 30px;
  height: 40px;
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: solid 2px rgb(20, 181, 230);
  font-size: 20px;
  color: white;
  outline: none;
}
```
