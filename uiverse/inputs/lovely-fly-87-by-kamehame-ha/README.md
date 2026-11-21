# Lovely Fly 87

A input UI element from Uiverse.io by kamehame-ha.

Source: https://uiverse.io/kamehame-ha/lovely-fly-87

Author: kamehame-ha

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, modern, clean

Colors: #818cf8, #e8e8e8

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="coolinput">
    <label for="input" class="text">Name:</label>
    <input type="text" placeholder="Write here..." name="input" class="input">
</div>
```

### styles.css

```css
/* From Uiverse.io by kamehame-ha - Tags: input, modern, clean */
.coolinput {
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: static;
  max-width: 240px;
}

.coolinput label.text {
  font-size: 0.75rem;
  color: #818CF8;
  font-weight: 700;
  position: relative;
  top: 0.5rem;
  margin: 0 0 0 7px;
  padding: 0 3px;
  background: #e8e8e8;
  width: fit-content;
}

.coolinput input[type=text].input {
  padding: 11px 10px;
  font-size: 0.75rem;
  border: 2px #818CF8 solid;
  border-radius: 5px;
  background: #e8e8e8;
}

.coolinput input[type=text].input:focus {
  outline: none;
}
```
