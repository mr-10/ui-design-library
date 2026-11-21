# Funny Impala 78

A notification UI element from Uiverse.io by Gianluks90.

Source: https://uiverse.io/Gianluks90/funny-impala-78

Author: Gianluks90

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: notification

Colors: #004cff, #008121, #760188, #e50000, #ff8d00, #ffee00

Fonts: See styles.css

Spacing and radius: 20px, 25px, calc(2 * var(--borderSize)), var(--borderSize)

## Source Code

### index.html

```html
<div class="notification gradient-border">
  <div class="icon">
    ❤️
  </div>
  <div class="message-container">
    <div class="title">Congratulations!</div>
    <div class="message">You've reached a new level
!</div>
  </div>

</div>
```

### styles.css

```css
/* From Uiverse.io by Gianluks90 - Tags: notification */
.notification {
  width: 255px;
  height: 60px;
  background: white;
  border-radius: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.icon {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: rgb(236, 236, 236);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
}

.message-container {
  display: flex;
  flex-direction: column;
}

.title {
  padding: 2px;
  text-transform: uppercase;
  color: black;
  font-weight: 600;
}

.message {
  padding: 2px;
  color: black;
  font-size: small;
}

.gradient-border {
  --borderSize: 3px;
  position: relative;
  border-radius: var(--borderSize);
}

.gradient-border:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderSize));
  left: calc(-1 * var(--borderSize));
  height: calc(100% + var(--borderSize) * 2);
  width: calc(100% + var(--borderSize) * 2);
  background: linear-gradient(75deg, #E50000, #FF8D00, #FFEE00, #008121, #004CFF, #760188);
  border-radius: calc(2 * var(--borderSize));
  z-index: -1;
  animation: gradientAnimation 4s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
```
