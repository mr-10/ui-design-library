# Ancient Goose 30

A button UI element from Uiverse.io by mobinkakei.

Source: https://uiverse.io/mobinkakei/ancient-goose-30

Author: mobinkakei

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #00154c, #12376e, #23487f, #fff

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<button class="btn">
    <span class="btn-text-one">Hover me</span>
    <span class="btn-text-two">Great!</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by mobinkakei - Tags: button */
.btn {
  width: 140px;
  height: 50px;
  background: linear-gradient(to top, #00154c, #12376e, #23487f);
  color: #fff;
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.btn span {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: top 0.5s;
}

.btn-text-one {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.btn-text-two {
  position: absolute;
  width: 100%;
  top: 150%;
  left: 0;
  transform: translateY(-50%);
}

.btn:hover .btn-text-one {
  top: -100%;
}

.btn:hover .btn-text-two {
  top: 50%;
}
```
