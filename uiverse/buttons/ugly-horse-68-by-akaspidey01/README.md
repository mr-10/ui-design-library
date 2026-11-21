# Ugly Horse 68

A button UI element from Uiverse.io by AKAspidey01.

Source: https://uiverse.io/AKAspidey01/ugly-horse-68

Author: AKAspidey01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, arrow

Colors: #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="button">
  <p class="button-text">Read More</p> <p class="iconer"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></p>  
</button>
```

### styles.css

```css
/* From Uiverse.io by AKAspidey01 - Tags: button, arrow */
.button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border-radius: 10px;
  border: none;
  overflow: hidden;
  background: rgb(164, 46, 194);
  color: #fff;
}

.button-text {
  transform: translateX(15px);
  font-size: 1.5em;
  font-weight: 700;
  transition-duration: 0.3s;
}

.iconer {
  transform: translateY(35px);
  transition-duration: 0.3s;
}

.button:hover .button-text {
  transform: translateX(0px);
}

.button:hover .iconer {
  transform: translateY(0px);
}
```
