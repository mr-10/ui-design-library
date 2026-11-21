# Shy Impala 90

A button UI element from Uiverse.io by Sujanthapast0.

Source: https://uiverse.io/Sujanthapast0/shy-impala-90

Author: Sujanthapast0

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, subscription, minimalist, success, button, smooth, submit, 3d button

Colors: #3b82f6, #cbdcf8, #fff

Fonts: var(--font)

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="button">
<p class="submit">submit</p>

</button>
```

### styles.css

```css
/* From Uiverse.io by Sujanthapast0 - Source: Sujanthapast0 - Tags: animation, subscription, minimalist, success, button, smooth, submit, 3d button */
.button {
  width: 90px;
  height: 40px;
  position: relative;
  font-family: var(--font);
  color: #3b82f6;
  font-weight: 600;
  background-color: #fff;
  border: none;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: all ease 100ms;
}

button:hover {
  background-color: #cbdcf8;
}

button:focus {
  background-color: #cbdcf8;
}

button::before {
  content: 'done✅';
  position: absolute;
  color: #3b82f6;
  left: 0;
  top: -14px;
  right: 0;
  transition: all ease 300ms;
  opacity: 0%;
}

button:focus::before {
  opacity: 100%;
  transform: translatey(26px);
}

.submit {
  transition: all ease 100ms;
  opacity: 100%;
}

button:focus > .submit {
  opacity: 0%;
}
```
