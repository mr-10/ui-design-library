# Jolly Moose 71

A button UI element from Uiverse.io by praveen-prasad2.

Source: https://uiverse.io/praveen-prasad2/jolly-moose-71

Author: praveen-prasad2

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000, #12bcfe, #44ce7b, #4fcf70, #a767e5, #fad648, #fff

Fonts: See styles.css

Spacing and radius: 3px, 6px, inherit

## Source Code

### index.html

```html
<button class="button">
  <span>Explore </span>
</button>
```

### styles.css

```css
/* From Uiverse.io by praveen-prasad2 - Tags: button */
.button {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  padding: 3px;
  border-radius: 6px;
  overflow: hidden;
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(115deg,
        #4fcf70, #fad648, 
        #a767e5,#12bcfe, 
        #44ce7b);
  background-size: 50% 100%;
  border-radius: inherit;
}

.button:hover::before {
  animation: animate_border .75s
        linear infinite;
}

.button span {
  position: relative;
  z-index: 2;
  display: block;
  background-color: #000;
  padding: 13px 20px;
  border-radius: 3px;
}

@keyframes animate_border {
  to {
    transform: translateX(-50%)
  }
}
```
