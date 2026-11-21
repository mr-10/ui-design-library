# Young Newt 20

A button UI element from Uiverse.io by dexter-st.

Source: https://uiverse.io/dexter-st/young-newt-20

Author: dexter-st

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: #000, #0000, #0009, #000a, #fff

Fonts: See styles.css

Spacing and radius: 1em, var(--border-radius)

## Source Code

### index.html

```html
<div class="btn-wrapper">
  <button class="btn">
    <svg class="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      ></path>
    </svg>

    <div class="txt-wrapper">
      <div class="txt-1">
        <span class="btn-letter">G</span>
        <span class="btn-letter">e</span>
        <span class="btn-letter">n</span>
        <span class="btn-letter">e</span>
        <span class="btn-letter">r</span>
        <span class="btn-letter">a</span>
        <span class="btn-letter">t</span>
        <span class="btn-letter">e</span>
      </div>
      <div class="txt-2">
        <span class="btn-letter">G</span>
        <span class="btn-letter">e</span>
        <span class="btn-letter">n</span>
        <span class="btn-letter">e</span>
        <span class="btn-letter">r</span>
        <span class="btn-letter">a</span>
        <span class="btn-letter">t</span>
        <span class="btn-letter">i</span>
        <span class="btn-letter">n</span>
        <span class="btn-letter">g</span>
      </div>
    </div>
  </button>
</div>
```

### styles.css

```css
.btn-wrapper {
  --font-size: 17px;
  --font-weight: 600;
  --primary-color: #fff;
  --secondary-color: #000;
  --border-radius: 1em;
  --highlight-color-hue: 200;
  --hue-1: 190;
  --hue-2: 210;
  --bg-radial-color: hsl(var(--hue-1), 100%, 70%);
  --bg-linear-color: hsl(var(--hue-2), 90%, 70%);
  --highlight-color: hsl(var(--highlight-color-hue), 100%, 70%);
  --highlight-color-2: hsl(var(--highlight-color-hue), 90%, 80%);
}

.btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.6rem;
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--primary-color);
  background: radial-gradient(
      120% 150% at 0% 50%,
      transparent 40%,
      var(--bg-radial-color) 100%
    ),
    linear-gradient(
      180deg,
      hsl(var(--hue-1), 80%, 75%) 0%,
      var(--bg-linear-color) 100%
    );
  background-blend-mode: overlay, normal;
  border: 1px solid hsl(var(--hue-1), 90%, 70%);
  border-radius: var(--border-radius);
  outline: none;
  cursor: pointer;
  box-shadow:
    0 0 0 0 #0000,
    inset 0 -0.15em 0 0 hsl(var(--hue-1), 100%, 70%),
    inset 0 0.1em 0 0 hsl(var(--hue-1), 100%, 85%),
    0 0 3px 0 hsl(var(--hue-1), 90%, 60%),
    0 0 6px 0 #0009;
  text-shadow: 0 -1px 1px hsl(var(--hue-1), 80%, 80%);
  transition:
    filter 0.3s ease,
    background-color 0.3s ease;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    50% 50% at 50% 0%,
    var(--highlight-color-2) 0%,
    transparent 50%
  );
  mix-blend-mode: overlay;
  pointer-events: none;
  opacity: 0.9;
}

.btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--border-radius);
  box-shadow:
    inset 0 0 12px 0 var(--highlight-color),
    inset 0 0 18px 0 var(--highlight-color-2);
  pointer-events: none;
  transition:
    box-shadow 0.3s ease,
    opacity 0.3s ease;
  opacity: 0.8;
}

.btn-svg {
  width: 1.3em;
  height: 1.3em;
  fill: hsl(var(--hue-1), 90%, 80%);
  filter: drop-shadow(0 0 6px hsl(var(--highlight-color-hue), 90%, 60%));
  animation: sparkle 1.8s ease-in-out infinite;
  z-index: 1;
}

.btn:active {
  background: hsl(var(--hue-2), 80%, 55%);
  box-shadow:
    inset 0 -0.15em 0 0 hsl(var(--hue-1), 100%, 65%),
    inset 0 0.15em 0 0 hsl(var(--hue-1), 100%, 85%),
    0 0 0 0 transparent,
    0 0 6px 0 var(--highlight-color),
    0 0 12px 0 #000a;
  filter: saturate(1.4);
  transform: scale(0.95);
}

.btn:active .btn-svg {
  transform: scale(1.1);
  fill: #fff;
  animation: none;
}

.txt-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  overflow: hidden;
  position: relative;
  height: 1.2em;
  z-index: 1;
}

.txt-1,
.txt-2 {
  display: flex;
  gap: 0.05em;
}

.txt-1 {
  display: flex;
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.5s ease;
}

.txt-2 {
  display: flex;
  transform: translateY(0);
  transition: transform 0.5s ease;
}

.btn-letter {
  display: inline-block;
}

.btn:hover .txt-1 {
  transform: translateY(0);
  opacity: 1;
}

.btn:hover .txt-2 {
  transform: translateY(100%);
}

@keyframes sparkle {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }

  50% {
    transform: scale(1.1) rotate(-5deg);
    opacity: 0.85;
  }
}

.btn:hover {
  filter: brightness(1.1);
  background: linear-gradient(
    180deg,
    hsl(var(--hue-1), 100%, 80%) 0%,
    var(--bg-linear-color) 100%
  );
  background-blend-mode: overlay, normal;
}

.btn:hover::after {
  box-shadow:
    inset 0 0 14px 0 var(--highlight-color),
    inset 0 0 20px 0 var(--highlight-color-2);
  opacity: 1;
}

.btn:hover .btn-svg {
  fill: #fff;
  filter: drop-shadow(0 0 3px hsl(var(--highlight-color-hue), 100%, 70%))
    drop-shadow(0 -4px 6px #0009);
  animation: none;
}
```
