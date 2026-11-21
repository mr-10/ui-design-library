# Orange Otter 84

A button UI element from Uiverse.io by itay1313.

Source: https://uiverse.io/itay1313/orange-otter-84

Author: itay1313

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #ac633697, #dd7d00, #fdc100, #fff2af6a

Fonts: See styles.css

Spacing and radius: 23px, 50px

## Source Code

### index.html

```html
<div class="body">
<button class="btn btn-hover">
  <span class="btn-text">Practice now</span>
</button>
</div>
```

### styles.css

```css
/* From Uiverse.io by itay1313 - Tags: button */
.body {
  --transition: all 0.55s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --yellow-bg: transparent linear-gradient(114deg, #fdc100 0%, #dd7d00 100%) 0%
    0% no-repeat padding-box;
  color: white;
  margin: 0;
}

.btn {
  border-radius: 23px;
  letter-spacing: 0.8px;
  font-size: 14px;
  font-weight: 300;
  color: white;
  white-space: nowrap;
  margin: 20px auto;
  width: 166px;
  height: 45px;
  cursor: pointer;
  position: relative;
  border: 1px solid #dd7d00;
  background: transparent;
}

.btn::before {
  -webkit-transition: var(--transition);
  transition: var(--transition);
  content: "";
  width: 50%;
  height: 100%;
  background: black;
  position: absolute;
  top: 0;
  right: 0;
}

.btn:hover::before {
  width: 100%;
}

.btn.btn-hover {
  border-radius: 50px;
  position: relative;
}

.btn.btn-hover .btn-text {
  color: white;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  mix-blend-mode: lighten;
}

.btn.btn-hover::before {
  border-radius: 50px;
  width: 100%;
  background: conic-gradient(
    transparent 240deg, #ac633697 240deg,
    #fff2af6a 300deg, transparent 300deg
  )
  100% / 64%
  no-repeat, var(--yellow-bg);
}

.btn.btn-hover:hover .btn-text {
  margin-right: 30px;
}

.btn.btn-hover:hover::before {
  background-position: right;
  border-radius: 23px;
  width: 25%;
}
```
