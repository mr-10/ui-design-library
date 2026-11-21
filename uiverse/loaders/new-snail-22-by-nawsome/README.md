# New Snail 22

A loader UI element from Uiverse.io by Nawsome.

Source: https://uiverse.io/Nawsome/new-snail-22

Author: Nawsome

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="semicircle">
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Nawsome - Tags: loader */
.semicircle,
.semicircle div {
  /*  Adjust the size of the entire animation here.
      (Remove max size below to go above 300px.) */
  width: 170px;
  height: 170px;
  /* Adjust the speed or timing function of the animation here. */
  animation: 6s rotate141 infinite linear;
  background-repeat: no-repeat;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.semicircle div {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
}

.semicircle:before,
.semicircle div:before {
  content: '';
  width: 100%;
  height: 50%;
  display: block;
  background: radial-gradient(transparent, transparent 65%, #000 65%, #000);
  background-size: 100% 200%;
}

@keyframes rotate141 {
  to {
    transform: rotate(360deg);
  }
}
```
