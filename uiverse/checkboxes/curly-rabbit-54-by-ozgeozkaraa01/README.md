# Curly Rabbit 54

A checkbox UI element from Uiverse.io by ozgeozkaraa01.

Source: https://uiverse.io/ozgeozkaraa01/curly-rabbit-54

Author: ozgeozkaraa01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, click animation, cool checkbox

Colors: #475569, #ec4899, #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="cntr">
  <input class="hidden-xs-up" id="cbx" type="checkbox" checked="">
  <label class="cbx" for="cbx"></label>
</div>
```

### styles.css

```css
/* From Uiverse.io by ozgeozkaraa01 - Tags: checkbox, click animation, cool checkbox */
.cbx {
  position: relative;
  top: 1px;
  width: 27px;
  height: 27px;
  border: 1px solid #475569;
  border-radius: 10px;
  transition: background 0.2s ease;
  cursor: pointer;
  display: block;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.cbx:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 8px;
  width: 7px;
  height: 14px;
  opacity: 0;
  transform: rotate(45deg) scale(0);
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transition: all 0.3s ease;
  transition-delay: 0.15s;
}

#cbx:checked ~ .cbx {
  border-color: transparent;
  background: #ec4899;
  animation: jelly 0.4s ease;
}

#cbx:checked ~ .cbx:after {
  opacity: 1;
  transform: rotate(45deg) scale(1);
}

.cntr {
  position: relative;
}

@keyframes jelly {
  from {
    transform: scale(1, 1);
  }

  20% {
    transform: scale(1.3, 0.7);
  }

  40% {
    transform: scale(0.7, 1.3);
  }

  60% {
    transform: scale(1.1, 0.9);
  }

  80% {
    transform: scale(0.9, 1.1);
  }

  to {
    transform: scale(1, 1);
  }
}

.hidden-xs-up {
  display: none!important;
}
```
