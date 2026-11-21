# Tidy Yak 66

A button UI element from Uiverse.io by Mohsinech.

Source: https://uiverse.io/Mohsinech/tidy-yak-66

Author: Mohsinech

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: black, button, click

Colors: #141414

Fonts: See styles.css

Spacing and radius: 0, 100px, 50% 50% 0 0

## Source Code

### index.html

```html
<div class="btn"><span data-text="Click me">Click me</span></div>
```

### styles.css

```css
/* From Uiverse.io by Mohsinech  - Tags: black, button, click */
.btn {
  background: transparent;
  border: 1px solid #141414;
  outline: none;
  padding: 12px 40px;
  height: 60px;
  border-radius: 100px;
  overflow: hidden;
  transform: scaleX(1);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.btn:hover {
  animation: animate-scaleX 0.6s cubic-bezier(0.4, 0, 0, 1);
  background: transparent;
}

.btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  background: black;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1),
    border-radius 0.5s cubic-bezier(0.4, 0, 0, 1);
  width: 100%;
  height: 100%;
  border-radius: 50% 50% 0 0;
  transform: translateY(100%);
}

.btn:hover::after {
  transform: translateY(0%);
  border-radius: 0;
}

.btn span {
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  position: relative;
  color: black;
}

.btn span:after {
  width: 100%;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);
  content: attr(data-text);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 1;
  transform: translate(-50%, 100%);
  color: white;
}
.btn:hover span:after {
  transform: translate(-50%, 0);
}

.btn:focus {
  outline: none;
}

@keyframes animate-scaleX {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(1.05);
  }
  100% {
    transform: scaleX(1);
  }
}
```
