# Selfish Turtle 89

A button UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/selfish-turtle-89

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #2f3640, #ff7979, #fff

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<button class="game-button">
    <svg class="play-icon" viewBox="0 0 40 40">
        <path d="M 10,10 L 30,20 L 10,30 z"></path>
    </svg>
    Play Now
</button>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: button */
.game-button {
  background-color: #ff7979;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 2px 2px 10px #ff7979;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.play-icon {
  width: 24px;
  height: 24px;
  fill: #fff;
  margin-right: 10px;
}

.game-button:hover {
  background-color: #2f3640;
  color: #ff7979;
  box-shadow: 2px 2px 20px #2f3640;
  transform: translateY(-2px);
}
```
