# Lazy Mouse 44

A button UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/lazy-mouse-44

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, button, gradients, css

Colors: #00f260, #0575e6, #4b4b4b, #64f38c, #e9e93e, #f79dee

Fonts: See styles.css

Spacing and radius: 10px, 12px

## Source Code

### index.html

```html
<button class="button">
  <div class="button-overlay"></div>
  <span>Gradient Button</span>  
</button>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: gradient, button, gradients, css */
.button {
  font-size: 19px;
  border-radius: 12px;
  background: linear-gradient(180deg, rgb(56, 56, 56) 0%, rgb(36, 36, 36) 66%, rgb(41, 41, 41) 100%);
  color: rgb(218, 218, 218);
  border: none;
  padding: 2px;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.button span {
  border-radius: 10px;
  padding: 0.8em 1.3em;
  padding-right: 1.2em;
  text-shadow: 0px 0px 20px #4b4b4b;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s;
  background-image: linear-gradient(to right, #00F260, #f79dee, #0575E6, #64f38c,#e9e93e);
  -webkit-background-clip: text;
  color: transparent;
  background-size: 300%;
  background-position: -100%;
  animation: animatedText 3s infinite alternate-reverse;
}

.button-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-conic-gradient(rgb(48, 47, 47) 0.0000001%, rgb(51, 51, 51) 0.000104%) 60% 60%/600% 600%;
  filter: opacity(10%) contrast(105%);
  -webkit-filter: opacity(10%) contrast(105%);
}

@keyframes animatedText {
  to {
    background-position: 100%;
  }
}
```
