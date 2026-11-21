# Mean Bobcat 66

A loader UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/mean-bobcat-66

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, text, writing

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="animation">Text writing!</div>
```

### styles.css

```css
/* From Uiverse.io by JkHuger - Tags: animation, text, writing */
@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
/* When you change the amount of characters in the h1, you have to change 
the with: 14ch and  steps(14, end), if there is 14 characters, put 14, 
if there is 20 put 20 */
.animation {
  font: bold 200% Consolas, Monaco, monospace;
  border-right: .1em solid black;
  width: 13.20ch;
  margin: 2em 2em;
  white-space: nowrap;
  overflow: hidden;
  -webkit-animation: typing 5s steps(13, end),
	           blink-caret .5s step-end infinite alternate;
}
```
