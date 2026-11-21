# Sour Otter 25

A card UI element from Uiverse.io by ElektroRaks.

Source: https://uiverse.io/ElektroRaks/sour-otter-25

Author: ElektroRaks

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, polygon, blur filter, text animation, rotate, clip-path

Colors: #1afbf0, #da00ff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="card">
     <div class="box">
          <div class="content">
               <span class="card-title">CSS Clip-Path </span>
          <div class="text">
               <strong>ELEKTRO RAKS</strong>
               <p>Custom card</p>
          </div>
          </div>
     </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by ElektroRaks - Tags: card, polygon, blur filter, text animation, rotate, clip-path */
.card {
  width: 11.875em;
  height: 15.875em;
  background: linear-gradient(135deg, #1afbf0, #da00ff);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.box {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.074);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(54% 27%, 100% 50%, 100% 100%, 51% 74%, 0 50%, 0% 0%);
  transition: 0.5s;
  line-height: 1.2;
}

.card-title {
  width: 100%;
  font-weight: bold;
  color: white;
  display: block;
  padding-top: 6.3em;
  font-size: 1.2em;
  transform: rotate(34deg);
  transition: 0.5s;
  margin-left: 25%;
}

.text {
  color: white;
  opacity: 0;
  transition: 0.5s;
}

.card:hover .content {
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 0 50%, 0% 0%);
}

.card:hover .card-title {
  padding-top: 1em;
  margin-left: 0%;
  transform: rotate(0deg);
}

.card:hover .text {
  opacity: 1;
}
```
