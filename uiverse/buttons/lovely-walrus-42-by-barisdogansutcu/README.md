# Lovely Walrus 42

A button UI element from Uiverse.io by barisdogansutcu.

Source: https://uiverse.io/barisdogansutcu/lovely-walrus-42

Author: barisdogansutcu

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #30a1b8, #30cfd0, #330867, #ffffff00

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<button>
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
    Edit
</button>
```

### styles.css

```css
/* From Uiverse.io by barisdogansutcu - Tags: button */
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  border: solid 3px transparent;
  background-clip: padding-box;
  box-shadow: 0px 0px 0px 3px #ffffff00;
  color: white;
  min-height: 43px;
  padding: 0 13px 0 13px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all .5s ease;
}

button:active {
  transform: scale(.9);
  transition: all 100ms ease;
}

button:hover {
  box-shadow: 0px 0px 0px 3px #30a1b8;
}

button svg {
  width: 16px;
}
```
