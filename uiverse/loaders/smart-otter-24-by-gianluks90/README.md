# Smart Otter 24

A loader UI element from Uiverse.io by Gianluks90.

Source: https://uiverse.io/Gianluks90/smart-otter-24

Author: Gianluks90

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, rainbow

Colors: #004cff, #008121, #760188, #e50000, #ff8d00, #ffee00

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
  <div class="red bar"></div>
  <div class="orange bar"></div>
  <div class="yellow bar"></div>
  <div class="green bar"></div>
  <div class="blue bar"></div>
  <div class="violet bar"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Gianluks90 - Tags: loader, rainbow */
.loader {
  height: 50px;
  display: flex;
  align-items: flex-end;
  gap: 3px;
}

.bar {
  height: 5px;
  width: 12px;
  animation-duration: 0.45s;
  animation-name: changeHeight;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.red {
  background-color: #E50000;
  box-shadow: 1px 1px 10px #E50000;
  animation-delay: 0.10s;
}

.orange {
  background-color: #FF8D00;
  box-shadow: 1px 1px 10px #FF8D00;
  animation-delay: 0.20s;
}

.yellow {
  background-color: #FFEE00;
  box-shadow: 1px 1px 10px #FFEE00;
  animation-delay: 0.25s;
}

.green {
  background-color: #008121;
  box-shadow: 1px 1px 10px #008121;
  animation-delay: 0.30s;
}

.blue {
  background-color: #004CFF;
  box-shadow: 1px 1px 10px #004CFF;
  animation-delay: 0.35s;
}

.violet {
  background-color: #760188;
  box-shadow: 1px 1px 10px #760188;
  animation-delay: 0.40s;
}

@keyframes changeHeight {
  from {
    height: 5px;
  }

  to {
    height: 40px;
  }
}
```
