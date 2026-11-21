# Breezy Sloth 97

A loader UI element from Uiverse.io by bociKond.

Source: https://uiverse.io/bociKond/breezy-sloth-97

Author: bociKond

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, phone, loader, circle loader, shake, camera, iphone

Colors: #0d85aa, #29536d, #cce3de

Fonts: See styles.css

Spacing and radius: .5rem, 50%

## Source Code

### index.html

```html
<div class="phone">
  <span class="loader"></span>
  <span class="text">Loading...</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by bociKond - Source: https://uiverse.io/Nawsome/ugly-skunk-66 - Tags: loading, phone, loader, circle loader, shake, camera, iphone */
/* phone */
.phone {
  --screen-clr: #0d85aa;
  --border-clr: #29536d;
  --loader-clr: #CCE3DE;
  background-color: var(--screen-clr);
  height: 13rem;
  aspect-ratio: 10/16;
  border-radius: .5rem;
  border: 5px solid var(--border-clr);
  border-top: 10px solid var(--border-clr);
  border-bottom: 10px solid var(--border-clr);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  animation: shake .5s infinite linear;
  position: relative;
}

/* camera */
.phone::after {
  content: '';
  position: absolute;
  top: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: 1rem;
  height: 5px;
  background-color: var(--loader-clr);
  border-radius: .5rem;
}

/* loader */
.loader {
  border: 10px dashed var(--loader-clr);
  width: 2rem;
  height: 2rem;
  padding: 1.7rem;
  border-radius: 50%;
  animation: loading 2s infinite ease-in-out;
}

/* loading text */
.text {
  color: var(--loader-clr);
}

/* loader spinning */
@keyframes loading {
  0% {
    rotate: 0deg;
  }

  100% {
    rotate: 360deg;
  }
}

/* phone shaking */
@keyframes shake {
  0% {
    rotate: 0deg;
  }

  10% {
    rotate: .5deg;
  }

  20% {
    rotate: 0deg;
  }

  30% {
    rotate: -.5deg;
  }

  50% {
    rotate: 0deg;
  }

  100% {
    rotate: 0deg;
  }
}
```
