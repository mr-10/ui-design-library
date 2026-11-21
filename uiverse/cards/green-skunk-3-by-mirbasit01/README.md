# Green Skunk 3

A card UI element from Uiverse.io by mirbasit01.

Source: https://uiverse.io/mirbasit01/green-skunk-3

Author: mirbasit01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, card, hover, dark, code, html, css, css effect

Colors: #0a89a8, #212121, #252e31, #717171

Fonts: See styles.css

Spacing and radius: 50em, 8px

## Source Code

### index.html

```html
<div class="card">
  <div class="main-content">
    <div class="header">
      <span></span>
      <span>03/01/2024</span>
    </div>
    <p class="heading">
      Different ways to use HTML, CSS, JAVA SCRIPT, IN REACT
    </p>
    <div class="categories">
      <span>HTML</span>
      <span>CSS</span>
      <span>JAVA SCRIPT</span>
      <span>REACT </span>
    </div>
  </div>
  <div class="footer">By @iamabdulbasit___</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by mirbasit01  - Tags: 3d, card, hover, dark, code, html, css, css effect */
.card {
  width: 330px;
  height: 370px;
  padding: 20px;
  color: white;
  background: linear-gradient(#212121, #212121) padding-box,
    linear-gradient(145deg, transparent 35%, #0a89a8, #252e31) border-box;
  border: 2px solid transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transform-origin: top bottom;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.card .main-content {
  flex: 1;
}

.card .header span:first-child {
  font-weight: 600;
  color: #717171;
  margin-right: 4px;
}

.card .heading {
  font-size: 24px;
  margin: 24px 0 16px;
  font-weight: 600;
}

.card .categories {
  display: flex;
  gap: 10px;
}

.card .categories span {
  background-color: #0a89a8;
  padding: 4px 8px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 50em;
}

.card .footer {
  font-weight: 600;
  color: #717171;
  margin-right: 4px;
}

.card:hover {
  rotate: -6deg;
}
```
