# Bad Mole 99

A toggle switch UI element from Uiverse.io by simontheonlyone.

Source: https://uiverse.io/simontheonlyone/bad-mole-99

Author: simontheonlyone

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: apple, minimalist, switch, dark, light&dark, battery

Colors: #111, #333, #eee

Fonts: See styles.css

Spacing and radius: 0% 100% 100% 0% / 0% 50% 50% 0%, 30px, 4px, 8px

## Source Code

### index.html

```html
<label class="switch">
  <input type="checkbox" />
  <span class="slider"></span>
  <div class="battery"></div>
</label>
```

### styles.css

```css
/* From Uiverse.io by simontheonlyone  - Website: https://www.apple.com - Name: Apple - Tags: apple, minimalist, switch, dark, light&dark, battery */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 6em;
  height: 6em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  inset: 0;
  background-color: #333;
  border-radius: 30px;
}

.slider:before {
  height: 0.8em;
  width: 1.1em;
  inset: 44px 28px;
  background: #eee;
  border-radius: 4px;
}

.battery {
  height: 1.4em;
  width: 2.9em;
  inset: 39px 23px;
  border: 2px solid #eee;
  border-radius: 8px;
}

.battery:before {
  height: 0.4em;
  width: 0.1em;
  inset: 0.4em 50px;
  border: none;
  border-radius: 0% 100% 100% 0% / 0% 50% 50% 0%;
  background: #eee;
}

.switch input:checked + .slider {
  background-color: #eee;
  box-shadow: 0 0 1px #eee;
}

.switch input:checked ~ .battery {
  border: 2px solid #111;
}

.switch input:checked ~ .battery:before {
  background: #111;
}

.switch input:checked + .slider:before {
  background: rgb(255, 176, 85);
  animation: lowbattery 1.6s linear;
}

@keyframes lowbattery {
  0% {
    width: 1.1em;
  }
  40% {
    width: 2.3em;
  }
  70% {
    width: 2.3em;
  }
  100% {
    width: 1.1em;
  }
}

.slider,
.battery,
.slider:before,
.battery:before {
  position: absolute;
  content: "";
  transition: 0.5s;
}
```
