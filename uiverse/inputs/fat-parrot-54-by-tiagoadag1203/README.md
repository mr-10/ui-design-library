# Fat Parrot 54

A input UI element from Uiverse.io by tiagoadag1203.

Source: https://uiverse.io/tiagoadag1203/fat-parrot-54

Author: tiagoadag1203

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, blue, purple, input, shadow

Colors: #1a1a1a, #3700ff, #aa00ff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<input placeholder="type it" class="input" name="text" type="text" />
```

### styles.css

```css
/* From Uiverse.io by tiagoadag1203  - Tags: animation, blue, purple, input, shadow */
.input {
  max-width: 190px;
  background-color: #1a1a1a;
  border: none;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  color: white;
}

.input:focus {
  animation: rotateShadow 2s infinite linear;
}

@keyframes rotateShadow {
  0% {
    box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff;
  }
  25% {
    box-shadow: -2px 2px 8px 1px #aa00ff, 2px -2px 8px 1px #3700ff;
  }
  50% {
    box-shadow: 2px 2px 8px 1px #aa00ff, -2px -2px 8px 1px #3700ff;
  }
  75% {
    box-shadow: 2px -2px 8px 1px #aa00ff, -2px 2px 8px 1px #3700ff;
  }
  100% {
    box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff;
  }
}
```
