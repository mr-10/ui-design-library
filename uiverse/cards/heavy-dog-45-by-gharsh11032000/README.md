# Heavy Dog 45

A card UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/heavy-dog-45

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, hover, hover effect, hoverme, cardhover , card hover

Colors: #ff6b00

Fonts: See styles.css

Spacing and radius: 12px

## Source Code

### index.html

```html
<div class="card">
  <p class="header">UI Blog's</p>
  <div class="main-content">
    <p class="heading">How to make a simple ui card?</p>
  </div>
  <div class="footer">by Harsh Gupta</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000  - Tags: card, hover, hover effect, hoverme, cardhover , card hover */
.card {
  width: 320px;
  height: 350px;
  padding: 20px;
  color: white;
  background: transparent;
  border: 2px solid #ff6b00;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transform-origin: center center;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card .main-content {
  flex: 1;
}

.header {
  margin-bottom: 24px;
}

.card .heading {
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
}

.card .footer {
  font-weight: 400;
  margin-right: 4px;
}

.card:hover {
  border-radius: 12px;
  background-color: #ff6b00;
  scale: 0.95;
  rotate: 8deg;
  box-shadow: 0px 3px 187.5px 7.5px rgba(255, 107, 0, 0.4);
}
```
