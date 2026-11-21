# Terrible Dingo 70

A button UI element from Uiverse.io by boryanakrasteva.

Source: https://uiverse.io/boryanakrasteva/terrible-dingo-70

Author: boryanakrasteva

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 10px, 30px

## Source Code

### index.html

```html
<button class="btn">
    <div class="scroll"> </div>
</button>
```

### styles.css

```css
/* From Uiverse.io by boryanakrasteva - Tags: button */
.btn {
  width: 30px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: 2px solid rgb(105, 127, 255);
  box-shadow: 0px 0px 10px rgb(105, 127, 255);
  position: relative;
}

.scroll {
  width: 5px;
  height: 10px;
  border-radius: 10px;
  background-color: rgb(105, 127, 255);
  box-shadow: 0px 0px 10px rgb(105, 127, 255);
  animation: scroll_4013 2s linear infinite;
  transform: translateY(40%);
}

.btn:after {
  content: 'scroll';
  position: absolute;
  top: 140%;
  color: whitesmoke;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

@keyframes scroll_4013 {
  0% {
    transform: translateY(40%);
  }

  50% {
    transform: translateY(90%);
  }
};
```
