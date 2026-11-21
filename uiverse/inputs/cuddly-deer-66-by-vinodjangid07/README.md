# Cuddly Deer 66

A input UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/cuddly-deer-66

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #292929

Fonts: See styles.css

Spacing and radius: 30px

## Source Code

### index.html

```html
<label for="usernameField" class="usernamelabel label">Username</label>
    <input type="text" placeholder="@" id="usernameField" required="required">
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07 - Tags: input */
.usernamelabel {
  display: block;
  color: white;
  font-size: 14px;
  padding: 5px 5px;
}

#usernameField {
  display: block;
  width: 200px;
  height: 40px;
  background-color: #292929;
  border-radius: 30px;
  border: 2px solid #292929;
  padding: 0px 12px;
  outline: none;
  caret-color: rgb(152, 88, 255);
  color: rgb(212, 212, 212);
  font-size: 12px;
  transition-duration: .2s;
}

#usernameField:focus,
#usernameField:valid {
  border: 2px solid rgb(152, 88, 255);
  transition-duration: .2s;
}
```
