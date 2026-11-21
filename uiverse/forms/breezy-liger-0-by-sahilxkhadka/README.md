# Breezy Liger 0

A form UI element from Uiverse.io by sahilxkhadka.

Source: https://uiverse.io/sahilxkhadka/breezy-liger-0

Author: sahilxkhadka

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: facebook, form, login , loginform

Colors: #03ad06, #06b909, #0f71f1, #1877f2, #f7f7f7, #fff

Fonts: See styles.css

Spacing and radius: 0.4rem, 0.5rem

## Source Code

### index.html

```html
<form>
  <p class="logo">Facebook</p>
  <input type="text" placeholder="Email" required="">
  <input type="password" placeholder="Password" required="">
  <button class="login">Log In</button>
  <a href="#">Forgot Password ?</a>
  <hr>
  <button class="create-account">Create New Account</button>
</form>
```

### styles.css

```css
/* From Uiverse.io by sahilxkhadka - Tags: facebook, form, login , loginform */
.logo {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
  color: #1877f2;
  font-weight: 700;
}

form {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 1.5rem 1rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}

form input {
  outline: none;
  padding: 0.4rem 0.5rem;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
}

form input:focus {
  border: 1.8px solid #1877f2;
}

form .login {
  outline: none;
  border: none;
  background: #1877f2;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  color: #fff;
}

form .login:hover {
  background: #0f71f1;
  cursor: pointer;
}

form a {
  text-decoration: none;
  text-align: center;
  font-size: 0.9rem;
  padding-top: 0.8rem;
  color: #1877f2;
}

form hr {
  background: #f7f7f7;
  margin: 0.5rem;
}

form .create-account {
  outline: none;
  border: none;
  background: #06b909;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  color: #fff;
  width: 75%;
  margin: 0 auto;
}

form .create-account:hover {
  background: #03ad06;
  cursor: pointer;
}
```
