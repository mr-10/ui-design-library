# Bad Warthog 50

A card UI element from Uiverse.io by dzoshi.

Source: https://uiverse.io/dzoshi/bad-warthog-50

Author: dzoshi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: dark, card, neon, futuristic, hover

Colors: #020202d8, #080808, #111111, #27127436, #500bf0, #5518e4, #67676b05, #928b8b, #a3a1a78f

Fonts: See styles.css

Spacing and radius: 30px

## Source Code

### index.html

```html
<div class="card">
  <img src="https://uiverse.io/logo-png.png" class="logoUI" alt="UI" />
</div>
```

### styles.css

```css
/* From Uiverse.io by dzoshi  - Tags: dark, card, neon, futuristic, hover */
.card {
  width: 200px;
  height: 200px;
  color: #67676b05;

  background: linear-gradient(-45deg, #111111 0%, #080808 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 20px 40px 0px #020202d8,
    0px 60px 80px 0px rgba(0, 0, 0, 0.678),
    0px 20px 95px 0px rgba(13, 33, 94, 0);
  border-top: 3px solid #a3a1a78f;
  outline: 3px solid #27127436;

  transition: all 0.6s ease-out;
}

.card:hover {
  color: #928b8b;
  background-color: 482fb8;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.945),
    0px 10px 20px 0px rgba(29, 9, 143, 0.856), 0px 0px 180px 0px rgb(47, 4, 202);
  outline: 3px solid #500bf0;
  outline: 3px solid #5518e4;

  transform: scale(0.97);
  transition: transform 0.4s, box-shadow 0.6s outline 0.8s ease-in;
}

.logoUI {
  filter: grayscale(60%);
  margin-top: 20px;
  width: 60%;
  opacity: 10%;
  transition: all 0.6s ease-in-out;
  position: relative;
  z-index: 1;
}

.card:hover .logoUI {
  filter: contrast(180%);
  backdrop-filter: grayscale(0%);

  opacity: 100%;
  transition: all 1s ease-out;
}
```
