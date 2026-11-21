# Light Chipmunk 10

A card UI element from Uiverse.io by 1osm.

Source: https://uiverse.io/1osm/light-chipmunk-10

Author: 1osm

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #262626, #e5e5e5, #f0f0f0, #ff5858

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="card">
  <div class="smallIcon">
    <div class="Icon"></div>
    <div class="Name"></div>
    <div class="Roles"></div>
    <div class="Descripion"></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by 1osm - Tags: card */
.card {
  width: 250px;
  height: 90px;
  background: #262626;
}

.smallIcon {
  width: 100%;
  height: 100%;
  background-color: #ff5858;
}

.smallIcon div {
  background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 
  40%, #e5e5e5 48%);
  margin-top: 10px;
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: load89234 2s infinite;
  color: #262626;
  font-weight: bold;
  font-size: 15px;
}

.Icon {
  margin: 10px;
  width: 70px;
  height: 70px;
  float: left;
  border-radius: 5px;
}

.Name {
  width: 90px;
  height: 20px;
  float: left;
  transform: translate(10px ,0px);
  border-radius: 5px;
}

.Roles {
  width: 40px;
  height: 20px;
  float: left;
  transform: translate(20px ,0px);
  border-radius: 5px;
}

.Descripion {
  margin: 10px;
  width: 140px;
  height: 45px;
  float: left;
  transform: translate(0px ,-5px);
  border-radius: 5px;
}

@keyframes load89234 {
  100% {
    background-position: -100% 0;
  }
}
```
