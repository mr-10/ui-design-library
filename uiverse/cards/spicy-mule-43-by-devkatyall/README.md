# Spicy Mule 43

A card UI element from Uiverse.io by devkatyall.

Source: https://uiverse.io/devkatyall/spicy-mule-43

Author: devkatyall

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, text animation, text, shining text

Colors: #222, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="shine">UIVERSE</div>
```

### styles.css

```css
/* From Uiverse.io by devkatyall  - Tags: card, text animation, text, shining text */
.shine {
  font-size: 2em;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.3);
  background: #222 -webkit-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    ) 0 0 no-repeat;
  background-image: -webkit-linear-gradient(
    -40deg,
    transparent 0%,
    transparent 40%,
    #fff 50%,
    transparent 60%,
    transparent 100%
  );
  -webkit-background-clip: text;
  -webkit-background-size: 50px;
  -webkit-animation: zezzz;
  -webkit-animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes zezzz {
  0%,
  10% {
    background-position: -200px;
  }
  20% {
    background-position: top left;
  }
  100% {
    background-position: 200px;
  }
}
```
