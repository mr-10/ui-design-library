# Dull Mole 77

A form UI element from Uiverse.io by bociKond.

Source: https://uiverse.io/bociKond/dull-mole-77

Author: bociKond

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: form, hover, focus, submit, label

Colors: #58bc82, #707070, #9c9c9c60, #efefef

Fonts: See styles.css

Spacing and radius: 0.5rem, 3rem

## Source Code

### index.html

```html
<form class="form">
  <span class="input-span">
  <label for="email" class="label">Email</label>
  <input type="email" name="email" id="email"></span>
  <span class="input-span">
  <label for="password" class="label">Password</label>
  <input type="password" name="password" id="password"></span>
  <span class="span"><a href="#">Forgot password?</a></span>
  <input class="submit" type="submit" value="Log in">
  <span class="span">Don't have an account? <a href="#">Sign up</a></span>
</form>
```

### styles.css

```css
/* From Uiverse.io by bociKond - Source: https://dribbble.com/shots/21363706-Haze-Website-Log-in-Page - Tags: form, hover, focus, submit, label */
form {
  --bg-light: #efefef;
  --bg-dark: #707070;
  --clr: #58BC82;
  --clr-alpha: #9c9c9c60;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.form .input-span {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

form input[type="email"],
form input[type="password"] {
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--clr-alpha);
  outline: 2px solid var(--bg-dark);
}

form input[type="email"]:focus,
form input[type="password"]:focus {
  outline: 2px solid var(--clr);
}

.label {
  align-self: flex-start;
  color: var(--clr);
  font-weight: 600;
}

form .submit {
  padding: 1rem 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  background-color: var(--bg-dark);
  color: var(--bg-light);
  border: none;
  cursor: pointer;
  transition: all 300ms;
  font-weight: 600;
  font-size: .9rem;
}

form .submit:hover {
  background-color: var(--clr);
  color: var(--bg-dark);
}

.span {
  text-decoration: none;
  color: var(--bg-dark);
}

.span a {
  color: var(--clr);
}
```
