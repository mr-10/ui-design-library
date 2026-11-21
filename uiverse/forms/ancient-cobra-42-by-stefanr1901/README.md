# Ancient Cobra 42

A form UI element from Uiverse.io by StefanR1901.

Source: https://uiverse.io/StefanR1901/ancient-cobra-42

Author: StefanR1901

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: form, input, discount form

Colors: #333, #f5f5f5, #ff5f59, #ff6f69, #fff

Fonts: See styles.css

Spacing and radius: 10px, 5px

## Source Code

### index.html

```html
<form class="colorful-form">
  <div class="form-group">
    <label class="form-label" for="name">Name:</label>
    <input required="" placeholder="Enter your name" class="form-input" type="text">
  </div>
  <div class="form-group">
    <label class="form-label" for="email">Email:</label>
    <input required="" placeholder="Enter your email" class="form-input" name="email" id="email" type="email">
  </div>
  <div class="form-group">
    <label class="form-label" for="message">Message:</label>
    <textarea required="" placeholder="Enter your message" class="form-input" name="message" id="message"></textarea>
  </div>
  <button class="form-button" type="submit">Submit</button>
</form>
```

### styles.css

```css
/* From Uiverse.io by StefanR1901 - Tags: form, input, discount form */
.colorful-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
}

textarea.form-input {
  height: 100px;
}

.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ff6f69;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #ff5f59;
}
```
