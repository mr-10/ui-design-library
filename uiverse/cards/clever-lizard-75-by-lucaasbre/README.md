# Clever Lizard 75

A card UI element from Uiverse.io by Lucaasbre.

Source: https://uiverse.io/Lucaasbre/clever-lizard-75

Author: Lucaasbre

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: minimalist, warning, card, modern, clean, confirm, modal, security

Colors: #1b7a43, #2d6830, #368339, #3e3e3e, #47a04b, #c21313, #c8eac9, #ccc, #e71f1f, #f93a3a

Fonts: "Segoe UI", Tahoma, sans-serif

Spacing and radius: 4px, 6px

## Source Code

### index.html

```html
<div class="warning-general">
  <div class="confirm-div">
    <p>
      <strong>The “Horror Games” category will be eliminated.</strong>
      <span>Are you sure you want to continue?</span>
    </p>
    <div class="modals-container">
      <button class="red-btn">Cancel</button>
      <button class="green-btn">Accept</button>
    </div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Lucaasbre  - Tags: minimalist, warning, card, modern, clean, confirm, modal, security */
.confirm-div {
  background-color: #ccc;
}

.green-btn {
  background-color: #47a04b;
}

.green-btn:hover {
  background-color: #368339;
}

.green-btn:active {
  background-color: #2d6830;
}

.green-btn:disabled {
  background-color: #c8eac9;
  color: #1b7a43;
}

.red-btn {
  background-color: #f93a3a;
}

.red-btn:hover {
  background-color: #e71f1f;
}

.red-btn:active {
  background-color: #c21313;
}

.red-btn:disabled {
  background-color: #ffc7c7;
  color: #c21313;
}

.confirm-div {
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 4px 4px 15px #3e3e3e;
  font-family: "Segoe UI", Tahoma, sans-serif;
  cursor: default;
}

.confirm-div button {
  cursor: pointer;
  width: 100%;
  padding: 4px 6px;
  border-radius: 4px;
  color: #fff;
  border: none;
  height: 30px;
  width: 100%;
}

.confirm-div p {
  display: flex;
  flex-direction: column;
}

.confirm-div p strong {
  margin-bottom: 15px;
}

.warning-general {
  position: absolute; /* switch to fixed */
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
}

.modals-container {
  display: flex;
  flex-direction: row;
  height: 32px;
  margin-top: 20px;
  gap: 7px;
  width: 100%;
}
```
