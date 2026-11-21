# Blue Bobcat 63

A button UI element from Uiverse.io by btongheng.

Source: https://uiverse.io/btongheng/blue-bobcat-63

Author: btongheng

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, purple, button, download, sign-up, social media, html, css

Colors: #4836bb, #644dff, #654dff63, #fff

Fonts: See styles.css

Spacing and radius: .75rem

## Source Code

### index.html

```html
<button class="button">
  BUTTON
</button>
```

### styles.css

```css
/* From Uiverse.io by btongheng - Tags: simple, purple, button, download, sign-up, social media, html, css */
.button {
  --😀: #644dff;
  --😀😀: #4836bb;
  --😀😀😀: #654dff63;
  cursor: pointer;
  width: 234px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.125em;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
  background: var(--😀);
  border: 2px solid var(--😀😀);
  border-radius: .75rem;
  box-shadow: 0 8px 0 var(--😀😀);
  transform: skew(-10deg);
  transition: all .1s ease;
  filter: drop-shadow(0 15px 20px var(--😀😀😀));
}

.button:active {
  letter-spacing: 0px;
  transform: skew(-10deg) translateY(8px);
  box-shadow: 0 0 0 var(--😀😀😀);
}
```
