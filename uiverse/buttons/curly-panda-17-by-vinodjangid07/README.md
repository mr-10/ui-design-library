# Curly Panda 17

A button UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/curly-panda-17

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, arrow, hover effect, back to top, scroll to top

Colors: #39fad7, #44ea76

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<button class="Btn">
  <svg height="1.2em" class="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
<p class="text">Back to Top</p>
</button>
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07 - Tags: button, arrow, hover effect, back to top, scroll to top */
.Btn {
  width: 45px;
  height: 45px;
  background: linear-gradient(#44ea76, #39fad7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  border: none;
}

.arrow path {
  fill: white;
}

.text {
  font-size: 0.7em;
  width: 100px;
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -18px;
  opacity: 0;
  transition-duration: .7s;
}

.Btn:hover .text {
  opacity: 1;
  transition-duration: .7s;
}

.Btn:hover .arrow {
  animation: slide-in-bottom .7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```
