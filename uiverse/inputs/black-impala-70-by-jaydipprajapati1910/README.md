# Black Impala 70

A input UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/black-impala-70

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, input, input effect

Colors: #999, #c3c6ce, #fff

Fonts: See styles.css

Spacing and radius: 10px, 15px

## Source Code

### index.html

```html
<input class="input" name="text" type="text" placeholder="Name">
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: animation, input, input effect  */
.input {
  max-width: 190px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #fff;
  padding: 15px 5px 10px 20px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  background-position: bottom right, bottom right;
  background-size: 100% 100%, 100% 100%;
  background-repeat: no-repeat;
  box-shadow: inset -4px -10px 0px rgba(255, 255, 255, 0.4),
    inset -4px -8px 0px rgba(0, 0, 0, 0.3),
    0px 2px 1px rgba(0, 0, 0, 0.3),
    0px 2px 1px rgba(255, 255, 255, 0.1);
  transform: perspective(70px) rotateX(5deg) rotateY(0deg);
  border-radius: 10px;
}

.input::before {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  background-position: bottom right, bottom right;
  background-size: 100% 100%, 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  border-radius: 15px;
  transition: all .1s ease-in-out 0s;
}

.input:focus {
  border: 2px solid #c3c6ce;
}

.input::placeholder {
  color: #fff;
  transition: all 0.3s ease;
}

.input:focus::placeholder {
  color: #999;
}
```
