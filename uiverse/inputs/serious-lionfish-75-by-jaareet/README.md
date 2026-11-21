# Serious Lionfish 75

A input UI element from Uiverse.io by Jaareet.

Source: https://uiverse.io/Jaareet/serious-lionfish-75

Author: Jaareet

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #fff

Fonts: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif

Spacing and radius: 0.4vw

## Source Code

### index.html

```html
<input type="text" name="text" class="input" placeholder="Write a message">
```

### styles.css

```css
/* From Uiverse.io by Jaareet - Tags: input */
.input {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  font-weight: 500;
  font-size: .8vw;
  color: #fff;
  background-color: rgb(28,28,30);
  box-shadow: 0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent;
  border-radius: 0.4vw;
  border: none;
  outline: none;
  padding: 0.4vw;
  max-width: 190px;
  transition: .4s;
}

.input:hover {
  box-shadow: 0 0 0 .15vw rgba(135, 207, 235, 0.186);
}

.input:focus {
  box-shadow: 0 0 0 .15vw skyblue;
}
```
