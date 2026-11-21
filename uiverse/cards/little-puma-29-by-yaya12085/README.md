# Little Puma 29

A card UI element from Uiverse.io by Yaya12085.

Source: https://uiverse.io/Yaya12085/little-puma-29

Author: Yaya12085

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #111827, #2563eb, #6b7280, #fff, #ffffff

Fonts: See styles.css

Spacing and radius: 0.5rem, 4px

## Source Code

### index.html

```html
<div class="card">
 <div class="image"></div>
  <div class="content">
    <a href="#">
      <span class="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </a>

    <p class="desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium 
    </p>

    <a class="action" href="#">
      Find out more
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Yaya12085 - Tags: card */
.card {
  max-width: 300px;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
}

.card a {
  text-decoration: none
}

.content {
  padding: 1.1rem;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 150px;
  background-color: rgb(239, 205, 255);
}

.title {
  color: #111827;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.desc {
  margin-top: 0.5rem;
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.action {
  display: inline-flex;
  margin-top: 1rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: #2563EB;
  padding: 4px 8px;
  border-radius: 4px;
}

.action span {
  transition: .3s ease;
}

.action:hover span {
  transform: translateX(4px);
}
```
