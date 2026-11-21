# Cuddly Kangaroo 87

A form UI element from Uiverse.io by guilhermeyohan.

Source: https://uiverse.io/guilhermeyohan/cuddly-kangaroo-87

Author: guilhermeyohan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: form

Colors: #006f8f, #008cba, #13121269, #1aa3bb, #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="container">
		<form>
			<label for="arquivo">Choose a file:</label>
			<input accept=".jpg, .jpeg, .png, .gif, .pdf" class="inpdddut" name="arquivo" id="arquivo" type="file">
			<input value="Send" type="submit" class="inpdddut">
		</form>
	</div>
```

### styles.css

```css
/* From Uiverse.io by guilhermeyohan - Tags: form */
.container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #13121269;
  border-radius: 5px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

.inpdddut[type="file"] {
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  background-color: #1aa3bb;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
}

.inpdddut[type="submit"] {
  padding: 10px 20px;
  background-color: #008CBA;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.inpdddut[type="submit"]:hover {
  background-color: #006F8F;
}
```
