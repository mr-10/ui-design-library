# Tricky Catfish 63

A loader UI element from Uiverse.io by Pradeepsaranbishnoi.

Source: https://uiverse.io/Pradeepsaranbishnoi/tricky-catfish-63

Author: Pradeepsaranbishnoi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #fff

Fonts: Consolas, Menlo, Monaco, monospace

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="code-loader">
  <span>{</span><span>}</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by Pradeepsaranbishnoi - Tags: loader */
.code-loader {
  color: #fff;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 100px;
  opacity: 0.8;
}

.code-loader span {
  display: inline-block;
  animation: pulse_414 0.4s alternate infinite ease-in-out;
}

.code-loader span:nth-child(odd) {
  animation-delay: 0.4s;
}

@keyframes pulse_414 {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
```
