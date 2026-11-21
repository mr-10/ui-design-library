# Plastic Shrimp 54

A input UI element from Uiverse.io by alexruix.

Source: https://uiverse.io/alexruix/plastic-shrimp-54

Author: alexruix

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, search

Colors: #0d0c22, #777, #c1d9bf, #d9e8d8, #f5f5f5eb

Fonts: See styles.css

Spacing and radius: 8px

## Source Code

### index.html

```html
<div class="group">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
    </svg>
    <input placeholder="Search" type="search" class="input">
</div>
```

### styles.css

```css
/* From Uiverse.io by alexruix - Tags: input, search */
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px;
}

.input {
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  width: 100%;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #D9E8D8;
  color: #0d0c22;
  box-shadow: 0 0 5px #C1D9BF, 0 0 0 10px #f5f5f5eb;
  transition: .3s ease;
}

.input::placeholder {
  color: #777;
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #777;
  width: 1rem;
  height: 1rem;
}
```
