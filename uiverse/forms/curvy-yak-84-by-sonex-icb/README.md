# Curvy Yak 84

A form UI element from Uiverse.io by sonex-ICB.

Source: https://uiverse.io/sonex-ICB/curvy-yak-84

Author: sonex-ICB

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, form, login form, subscribe

Colors: #c6cf9b, #f6eca9

Fonts: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif

Spacing and radius: 0px 0px 18px 18px, 18px, 18px 18px 0px 0px

## Source Code

### index.html

```html
<div class="form">
  <input placeholder="Email Address" class="input" type="text" />
  <div class="btn">SUBSCRIBE</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by sonex-ICB  - Tags: simple, form, login form, subscribe */
.input,
.btn {
  border: 0;
  outline: 0;
  padding: 10px;
  text-align: center;
  font-weight: 700;
  color: gray;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  border-radius: 18px 18px 0px 0px;
}
.btn {
  border-radius: 0px 0px 18px 18px;
  background-color: #c6cf9b;
  color: #f6eca9;
  cursor: pointer;
  transition: 0.5s;
}
.form {
  padding: 4px;
  background-color: #f6eca9;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  box-shadow: 0px 0px 3px 1px #c6cf9b;
}
.form:hover {
  box-shadow: 0px 0px 3px 1px rgb(162, 157, 157);
}
.btn:hover {
  background-color: #f6eca9;
  color: #c6cf9b;
}
```
