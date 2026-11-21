# Modern Rabbit 52

A input UI element from Uiverse.io by SouravBandyopadhyay.

Source: https://uiverse.io/SouravBandyopadhyay/modern-rabbit-52

Author: SouravBandyopadhyay

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, light, transition

Colors: #1e78ff, #252525, #2cfff2, #caab98, #ff3e3e, #ff54a6, #ff6e1d

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="inp-border a1">
      <input placeholder="Your Name" name="name1" type="text" class="input">
  </div>
```

### styles.css

```css
/* From Uiverse.io by SouravBandyopadhyay - Tags: input, light, transition */
.inp-border {
  padding: 5px;
  margin: 2em 1em;
  border-radius: 50px;
  max-width: 300px;
}

.input {
  text-align: center;
  padding: 15px;
  outline: none;
  border: double 0;
  background: #252525;
  border-radius: 50px;
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  font-size: 1.5rem;
}

.a1 {
  background: linear-gradient(
    330.28deg,
    #ff6e1d 100%,
    #ff6e1d 100%,
    #ff6e1d 100%
  );
}

.a1 > input {
  color: #caab98;
}

.a1 > input::placeholder {
  color: #ff6e1d;
  opacity: 0.6;
}

.inp-border:focus-within {
  background: linear-gradient(
    330.28deg,
    #2cfff2 0%,
    #1e78ff 30.73%,
    #ff54a6 55.73%,
    #ff6e1d 79.17%,
    #ff3e3e 100%
  );
}

.inp-border:hover {
  background: linear-gradient(
    330.28deg,
    #2cfff2 0%,
    #1e78ff 30.73%,
    #ff54a6 55.73%,
    #ff6e1d 79.17%,
    #ff3e3e 100%
  );
}
```
