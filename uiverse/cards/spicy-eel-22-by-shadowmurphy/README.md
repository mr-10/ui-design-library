# Spicy Eel 22

A card UI element from Uiverse.io by shadowmurphy.

Source: https://uiverse.io/shadowmurphy/spicy-eel-22

Author: shadowmurphy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, neumorphism, card

Colors: #262626, #2cad3d, #3f3f40, #bdbfb7

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<section class="card">
  <header>
    <p>Runtime</p>
    <a href="#">Details</a>
  </header>
  <main>
    <p>42 <a href="#">ms</a></p>
  </main>
  <footer>
    <a href="#">Beats 92.42%</a><p>of users with JavaScript</p>
  </footer>
</section>
```

### styles.css

```css
/* From Uiverse.io by shadowmurphy - Tags: simple, material design, neumorphism, card */
.card {
  width: 350px;
  height: 150px;
  background: #262626;
  border-radius: 10px;
  border: 1px solid #3F3F40;
}

a {
  text-decoration: none;
}

header, footer, main {
  display: flex;
  align-items: center;
}

header {
  justify-content: space-between;
  margin: 20px;
  color: #BDBFB7;
}

header a {
  font-size: 15px;
  cursor: pointer;
  color: #BDBFB7
}

main {
  justify-content: flex-start;
  margin: 20px;
}

main p {
  color: white;
  font-weight: 600;
}

main a {
  color: #BDBFB7;
  font-weight: 100;
}

footer {
  margin: 20px;
  font-size: 15px;
  gap: 5px;
}

footer a {
  color: #2CAD3D;
  font-weight: 600;
}

footer p {
  color: white;
}
```
