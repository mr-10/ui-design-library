# Angry Cow 54

A button UI element from Uiverse.io by andrew-demchenk0.

Source: https://uiverse.io/andrew-demchenk0/angry-cow-54

Author: andrew-demchenk0

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: icon, animation, red, button, opacity, pause, big

Colors: #ff284818, #ff284839, #ff2849

Fonts: sans-serif

Spacing and radius: 16px

## Source Code

### index.html

```html
<button class="button">
  <svg class="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#ff2849" stroke-linecap="round" stroke-width="2"><rect height="14" rx="1.5" width="3" x="15" y="5"></rect><rect height="14" rx="1.5" width="3" x="6" y="5"></rect></g></svg>
  <span class="label">Pause</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by andrew-demchenk0 - Tags: icon, animation, red, button, opacity, pause, big */
.button {
  width: 122px;
  height: 60px;
  padding: 18px 22px 18px 20px;
  gap: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff284818;
  border-radius: 16px;
  border: none;
  cursor: pointer;
}

.label {
  font-family: sans-serif;
  height: 23px;
  font-size: 19px;
  line-height: 24px;
  color: #FF2849;
}

.button:hover {
  background: #ff284839;
}

.button:hover .svg-icon {
  animation: pulse 0.7s linear infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.13);
  }

  100% {
    transform: scale(1);
  }
}
```
