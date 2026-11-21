# Black Cheetah 92

A form UI element from Uiverse.io by Smit-Prajapati.

Source: https://uiverse.io/Smit-Prajapati/black-cheetah-92

Author: Smit-Prajapati

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: form, contacts form, coolform

Colors: #001925, #002733, #013747, #87a4b6, #ff7a01

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="form-container">
    <div class="form">
        <span class="heading">Get in touch</span>
        <input placeholder="Name" type="text" class="input">
        <input placeholder="Email" id="mail" type="email" class="input">
        <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
        <div class="button-container">
        <div class="send-button">Send</div>
        <div class="reset-button-container">
            <div id="reset-btn" class="reset-button">Reset</div>
        </div>
    </div>
</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Smit-Prajapati - Tags: form, contacts form, coolform */
.orange {
  color: #ff7a01;
}

.form-container {
  max-width: 700px;
  margin: 30px;
  background-color: #001925;
  padding: 30px;
  border-left: 5px solid #ff7a01;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
}

.heading {
  display: block;
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.form-container .form .input {
  color: #87a4b6;
  width: 100%;
  background-color: #002733;
  border: none;
  outline: none;
  padding: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  border-left: 1px solid transparent;
}

.form-container .form .input:focus {
  border-left: 5px solid #ff7a01;
}

.form-container .form .textarea {
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #013747;
  color: #ff7a01;
  font-weight: bold;
  resize: none;
  max-height: 150px;
  margin-bottom: 20px;
  border-left: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.form-container .form .textarea:focus {
  border-left: 5px solid #ff7a01;
}

.form-container .form .button-container {
  display: flex;
  gap: 10px;
}

.form-container .form .button-container .send-button {
  flex-basis: 70%;
  background: #ff7a01;
  padding: 10px;
  color: #001925;
  text-align: center;
  font-weight: bold;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.form-container .form .button-container .send-button:hover {
  background: transparent;
  border: 1px solid #ff7a01;
  color: #ff7a01;
}

.form-container .form .button-container .reset-button-container {
  filter: drop-shadow(1px 1px 0px #ff7a01);
  flex-basis: 30%;
}

.form-container .form .button-container .reset-button-container .reset-button {
  position: relative;
  text-align: center;
  padding: 10px;
  color: #ff7a01;
  font-weight: bold;
  background: #001925;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
  transition: all 0.2s ease-in-out;
}

.form-container .form .button-container .reset-button-container .reset-button:hover {
  background: #ff7a01;
  color: #001925;
}
```
