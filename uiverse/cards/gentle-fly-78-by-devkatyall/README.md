# Gentle Fly 78

A card UI element from Uiverse.io by devkatyall.

Source: https://uiverse.io/devkatyall/gentle-fly-78

Author: devkatyall

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #0000003a

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="card">
  <div class="emojis">
    <button>😄</button>
    <button>😁</button>
    <button>😆</button>
    <button>😂</button>
  </div>
  <div class="emojis">
    <button>😄</button>
    <button>😁</button>
    <button>😆</button>
    <button>😂</button>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by devkatyall  - Tags: card */
.card {
  width: 354px;
  background: rgba(41, 41, 41, 0.07);
  white-space: nowrap;
  overflow: hidden;
  border-radius: 50px;
  -webkit-box-shadow: -10px 0px 13px -7px #0000003a,
    10px 0px 13px -7px #0000003a, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: -10px 0px 33px -7px #0000003a, 10px 0px 33px -7px #0000003a,
    5px 5px 35px 5px rgba(0, 0, 0, 0);
}

button {
  font-size: 70px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  cursor: grab;
}
button:hover {
  transform: scale(1.1);
  transition: 0.5s ease;
}
.emojis {
  display: inline-block;
  animation: 5s sliding infinite linear;
}

/* to pause on hover  */
/* .card:hover .emojis{
  animation-play-state: paused;
} */

@keyframes sliding {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-101%);
  }
}
```
