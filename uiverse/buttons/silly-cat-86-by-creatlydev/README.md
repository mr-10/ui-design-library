# Silly Cat 86

A button UI element from Uiverse.io by Creatlydev.

Source: https://uiverse.io/Creatlydev/silly-cat-86

Author: Creatlydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover effect, hover button

Colors: #000, #fff

Fonts: See styles.css

Spacing and radius: 10rem, 50%

## Source Code

### index.html

```html
<a style="--clr: #7808d0" class="button" href="#">
            <span class="button__icon-wrapper">
                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
            Explore All
        </a>
```

### styles.css

```css
/* From Uiverse.io by Creatlydev - Tags: button, hover effect, hover button */
.button {
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: .75rem;
  background-color: var(--clr);
  color: #fff;
  border-radius: 10rem;
  font-weight: 600;
  padding: .75rem 1.5rem;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color .3s;
}

.button__icon-wrapper {
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  position: relative;
  color: var(--clr);
  background-color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.button:hover {
  background-color: #000;
}

.button:hover .button__icon-wrapper {
  color: #000;
}

.button__icon-svg--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.button:hover .button__icon-svg:first-child {
  transition: transform .3s ease-in-out;
  transform: translate(150%, -150%);
}

.button:hover .button__icon-svg--copy {
  transition: transform .3s ease-in-out .1s;
  transform: translate(0);
}
```
