# Strange Deer 62

A form UI element from Uiverse.io by TasneemHatem97.

Source: https://uiverse.io/TasneemHatem97/strange-deer-62

Author: TasneemHatem97

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: form, password, login form

Colors: #005ce6, #0066ff, #4287ef, #7c6666, #e0ecfb, #f1f7fe, #fff

Fonts: See styles.css

Spacing and radius: 15px, 25px, 8px

## Source Code

### index.html

```html
<div class="body">
        <div class="container">
            <form>
                <div class="head">
                    <span>Sign up</span>
                    <p>Create a free account with your email.</p>
                </div>
                <div class="inputs">
                    <input type="text" placeholder="Full Name">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                </div>
                <button>Sign up</button>
            </form>
            <div class="form-footer">
                <p>Have an account? <a href="#">Log in</a></p> 
            </div>
    
        </div>

    </div>
```

### styles.css

```css
/* From Uiverse.io by TasneemHatem97 - Tags: form, password, login form */
.container {
  max-width: 300px;
  background-color: #F1F7FE;
  border-radius: 15px;
  overflow: hidden;
}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 24px 24px;
  gap: 16px;
  text-align: center;
}

form .head {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

form .head span {
  font-size: 1.6rem;
  font-weight: bolder;
  color: black;
}

form .head p {
  font-size: 1.1rem;
  color: #7C6666;
}

form .inputs {
  overflow: hidden;
  background-color: #fff;
  width: 100%;
  margin: 1rem 0.5rem;
  border-radius: 8px;
  border-bottom: none;
  outline: 0;
}

form .inputs input {
  border: none;
  outline: none;
  padding: 8px 15px;
    /* علشان اقدر اخلي البلاس هولدر من اول الفورم بديله نفس الويدس */
  width: 100%;
  height: 40px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.299);
  font-weight: 200;
}

form button {
  background-color: #4287ef;
  color: white;
  width: 100%;
  height: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 0;
  overflow: hidden;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 1s ease-in-out;
}

form button:hover {
  background-color: #005ce6;
}

.form-footer {
  background-color: #e0ecfb;
  padding: 16px;
  font-size: 1rem;
  text-align: center;
}

.form-footer a {
  font-weight: bolder;
  color: #0066ff;
  transition: all 3s ease-in-out;
}

.form-footer a:hover {
  color: #005ce6;
}
```
