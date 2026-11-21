# Wonderful Penguin 4

A button UI element from Uiverse.io by benjimich.

Source: https://uiverse.io/benjimich/wonderful-penguin-4

Author: benjimich

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover

Colors: #3da9fc

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<button class="button">
  <div class="line one">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
  <div class="line two">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
  <div class="line three">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
    <div class="line four">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
    
    <div class="line five">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
    
    <div class="line six">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
    
    <div class="line seven">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
</button>
```

### styles.css

```css
/* From Uiverse.io by benjimich - Tags: button, hover */
.button {
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  width: 70px;
  gap: 4px;
}

.button:hover {
  animation: move 2s infinite ease;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0);
  }
}

.round {
  width: 6px;
  height: 6px;
  background: #3da9fc;
  border-radius: 50%;
}

.line {
  display: flex;
  gap: 4px;
}

.two {
  transform: translateX(10px);
}

.three {
  transform: translateX(20px);
}

.four {
  transform: translateX(30px);
}

.five {
  transform: translateX(20px);
}

.six {
  transform: translateX(10px);
}
```
