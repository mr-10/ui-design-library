# Cowardly Treefrog 50

A button UI element from Uiverse.io by aryansagar2405.

Source: https://uiverse.io/aryansagar2405/cowardly-treefrog-50

Author: aryansagar2405

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #9a49f0, #c77dff, #f5f0ff, #ffffff

Fonts: Arial, sans-serif

Spacing and radius: 20px

## Source Code

### index.html

```html
<div class="button-container">
  <button class="styled-button">Join Today <span class="arrow">→</span></button>
</div>
```

### styles.css

```css
/* From Uiverse.io by aryansagar2405  - Tags: button */
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f0ff;
  margin: 0;
  font-family: Arial, sans-serif;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

.styled-button {
  background: linear-gradient(145deg, #c77dff, #9a49f0);
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 15px 40px;
  font-size: 1.2em;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  transform: rotateY(-5deg) rotateX(2deg);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: pointer;
}

.styled-button .arrow {
  font-size: 1.2em;
  margin-left: 10px;
}

.styled-button:hover {
  transform: rotateY(-5deg) rotateX(2deg) translateY(-5px);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.4);
}
```
