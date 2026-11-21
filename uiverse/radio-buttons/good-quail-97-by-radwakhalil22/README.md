# Good Quail 97

A radio button UI element from Uiverse.io by radwakhalil22.

Source: https://uiverse.io/radwakhalil22/good-quail-97

Author: radwakhalil22

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: #c3bacc

Fonts: Arial, Helvetica, sans-serif

Spacing and radius: 15px, 50%, 50px

## Source Code

### index.html

```html
<div class="radio-input">
  <input type="radio" id="neonShadow" name="value-radio"><span class="span"></span>
  <input type="radio" id="neonShadow" name="value-radio"><span class="span"></span>
  <input type="radio" id="neonShadow" name="value-radio"><span class="span"></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by radwakhalil22 - Tags:  */
.radio-input #neonShadow {
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50px;
  background-color: rgba(5, 19, 16, 0.3);
  animation: glow 1s infinite;
  transition: 0.5s;
  accent-color: black;
  appearance: none;
  background-size: contain;
}

#neonShadow[type='radio']:after {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: relative;
  content: '';
  display: inline-block;
  visibility: visible;
}

#neonShadow[type='radio']:checked:after {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  background-color: white;
  content: '';
  display: inline-block;
  visibility: visible;
}

.span {
  display: block;
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  padding-top: 15%;
  padding-right: 2.5%;
  margin-right: 0px;
  font-size: 1.2rem;
  transition: 0.3s;
  opacity: 0;
}

.span:hover {
  transition: 0.3s;
  opacity: 1;
  font-weight: 700;
}

#neonShadow:hover {
  transform: scale(0.9);
  background-color: #c3bacc;
  transition: 0.5s;
}

@keyframes glow {
  0% {
    box-shadow: 5px 5px 20px rgb(93, 52, 168),-5px -5px 20px rgb(93, 52, 168);
  }

  50% {
    box-shadow: 5px 5px 20px rgb(81, 224, 210),-5px -5px 20px rgb(81, 224, 210)
  }

  100% {
    box-shadow: 5px 5px 20px rgb(93, 52, 168),-5px -5px 20px rgb(93, 52, 168)
  }
}
```
