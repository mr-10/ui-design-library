# Great Snake 42

A toggle switch UI element from Uiverse.io by guilhermeyohan.

Source: https://uiverse.io/guilhermeyohan/great-snake-42

Author: guilhermeyohan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #4cd964, #5de24e, #b3b3b3, #e6e6e6, #fff

Fonts: See styles.css

Spacing and radius: 50%, 50px

## Source Code

### index.html

```html
<div class="checkbox-apple">
  <input class="yep" id="check-apple" type="checkbox">
  <label for="check-apple"></label>
</div>
```

### styles.css

```css
/* From Uiverse.io by guilhermeyohan - Tags: checkbox */
.checkbox-apple {
  position: relative;
  width: 50px;
  height: 25px;
  margin: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-apple label {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 25px;
  border-radius: 50px;
  background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkbox-apple label:after {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.checkbox-apple input[type="checkbox"]:checked + label {
  background: linear-gradient(to bottom, #4cd964, #5de24e);
}

.checkbox-apple input[type="checkbox"]:checked + label:after {
  transform: translateX(25px);
}

.checkbox-apple label:hover {
  background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
}

.checkbox-apple label:hover:after {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.yep {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 25px;
}
```
