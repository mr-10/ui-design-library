# Tough Baboon 84

A loader UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/tough-baboon-84

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000, #4284f3, #ea4335

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="ball"></div>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: loader */
.ball {
 --size: 20px;
 --timing: 0.7s;
 --displace: 70px;
 border-radius: 50%;
 width: var(--size);
 height: var(--size);
 background: #000;
 margin-right: var(--displace);
 animation: animation321 var(--timing) infinite alternate
    cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes animation321 {
 0% {
  background: #4284f3;
  transform: translateX(var(--displace));
 }

 100% {
  background: #ea4335;
  transform: translateX(00px);
 }
}
```
