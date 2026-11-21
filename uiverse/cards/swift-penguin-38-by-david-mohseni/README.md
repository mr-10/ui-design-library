# Swift Penguin 38

A card UI element from Uiverse.io by david-mohseni.

Source: https://uiverse.io/david-mohseni/swift-penguin-38

Author: david-mohseni

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, card

Colors: #999, #bbb, #ddd, #eee, #fff

Fonts: See styles.css

Spacing and radius: 20px, 50%, 8px

## Source Code

### index.html

```html
<div class="card">
    <div class="icon">
    </div>

    <div class="content">
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
    </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by david-mohseni - Tags: neumorphism, card */
.card {
  width: 190px;
  height: 120px;
  background-color: #eee;
  text-align: center;
  border: 10px solid #eee;
  border-radius: 20px;
  box-shadow: inset 5px 5px 10px #bbb, inset -5px -5px 10px #fff;
  transition: 0.5s;
}

.card:hover {
  height: 254px;
}

.icon {
  width: 60px;
  height: 60px;
  color: red;
  font-size: 30px;
  background-color: #eee;
  margin: 20px auto;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 8px 8px 10px #ddd, -8px -8px 10px #fff;
}

.content {
  color: #999;
  background-color: #eee;
  padding: 10px;
  margin: 5px 20px;
  border-radius: 8px;
  box-shadow: 8px 8px 10px #ddd, -8px -8px 10px #fff;
  transform: translateY(-80px) scale(0);
  transition: all 0.5s;
}

.card:hover .content {
  transform: translateY(0) scale(1)
}

.content h3 {
  text-shadow: 2px 2px 0px #fff;
}
```
