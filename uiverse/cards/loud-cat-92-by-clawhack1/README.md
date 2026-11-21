# Loud Cat 92

A card UI element from Uiverse.io by ClawHack1.

Source: https://uiverse.io/ClawHack1/loud-cat-92

Author: ClawHack1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: login, card

Colors: #0069d9, #0069d9e7, #007bff, #333, #555, #ddd, #f0f0f0, #f8f8f8, #fff

Fonts: See styles.css

Spacing and radius: 10px, 5px

## Source Code

### index.html

```html
<div class="login-card">
  <div class="card-header">
    <h1>Login</h1>
  </div>
  <div class="card-body">
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required="">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required="">
      </div>
      <div class="form-group">
        <button type="submit" class="login-button">Login</button>
      </div>
    </form>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by ClawHack1 - Tags: login, card */
.login-card {
  background-color: #f8f8f8;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  max-width: 400px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  text-align: center;
  margin-bottom: 20px;
}

.card-header h1 {
  font-size: 2em;
  color: #333;
  text-shadow: 1px 1px #ddd;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  font-size: 1.2em;
  color: #555;
  margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f0f0f0;
  font-size: 1.2em;
  color: #555;
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.3);
  outline: none;
}

input[type="submit"] {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2em;
  padding: 10px;
  transition: background-color 0.3s ease;
}

input[type="submit"]:hover {
  background-color: #0069d9;
}

.login-button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2em;
  padding: 10px;
  width: 100%;
  transition: background-color 0.3s ease;
  transition: 0.25s;
}

.login-button:hover {
  background-color: #0069d9e7;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0,105,217,1);
  -moz-box-shadow: 0px 0px 30px 0px rgba(0,105,217,1);
  box-shadow: 0px 0px 30px 0px rgba(0,105,217,1);
}
```
