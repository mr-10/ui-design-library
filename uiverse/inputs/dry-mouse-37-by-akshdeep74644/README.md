# Dry Mouse 37

A input UI element from Uiverse.io by Akshdeep74644.

Source: https://uiverse.io/Akshdeep74644/dry-mouse-37

Author: Akshdeep74644

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #000, #2196f3, #e8e8e8

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<section>
    <div class="input-group">
        <input class="input" autocomplete="off" name="text" type="text" required="">
        <label class="user-label">Full Name</label>
    </div>
</section>
```

### styles.css

```css
/* From Uiverse.io by Akshdeep74644 - Tags: input */
.input-group {
  position: relative;
}

.input {
  border: 3px solid #000;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: black;
}

.user-label {
  position: absolute;
  left: 15px;
  color: #000;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 350ms;
}

.input:focus,
input:valid {
  outline: none;
  --angle: 0deg;
  border-bottom: 3px solid;
  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
  animation: 3s rotate9234 linear infinite;
}

@keyframes rotate9234 {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.input:focus~label,
input:valid~label {
  transform: translateY(235%) scale(1);
  background-color: #e8e8e8;
  padding: 0 .2em;
  color: #2196f3;
}
```
