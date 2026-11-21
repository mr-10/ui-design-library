# Smooth Cow 62

A button UI element from Uiverse.io by aadium.

Source: https://uiverse.io/aadium/smooth-cow-62

Author: aadium

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #6019bd, #fff

Fonts: 'Courier New', Courier, monospace

Spacing and radius: 0.6em

## Source Code

### index.html

```html
<button class="cti">
  <div class="CTI">
    Code to Infinity
  </div>
</button>
```

### styles.css

```css
/* From Uiverse.io by aadium - Tags: button */
.cti {
  background-color: #6019bd;
  padding: 17px 30px;
  border: 3px solid transparent;
  border-radius: 0.6em;
  transition: 0.2s;
}

.cti:hover {
  background-color: transparent;
  border: 3px solid #6019bd;
  box-shadow: 0px 0px 27px 5px #6019bd;
}

.CTI {
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  font-size: 17px;
  font-weight: bold;
  overflow: hidden;
  border-right: 4px solid transparent;
  white-space: nowrap;
  margin: 0 auto;
}

.cti:hover .CTI {
  border-right: 4px solid #6019bd;
  animation: letters 1.75s steps(22, end),
    cursor .4s step-end infinite;
}

@keyframes letters {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes cursor {
  from {
    border-color: transparent
  }

  50% {
    border-color: #6019bd
  }
}
```
