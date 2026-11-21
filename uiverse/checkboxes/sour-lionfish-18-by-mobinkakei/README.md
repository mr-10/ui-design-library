# Sour Lionfish 18

A checkbox UI element from Uiverse.io by mobinkakei.

Source: https://uiverse.io/mobinkakei/sour-lionfish-18

Author: mobinkakei

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #08bb68, #ddd, #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<label class="checkbox-wrapper">
<input checked="" type="checkbox" id="check" hidden="">
<label for="check" class="checkmark"></label>
</label>
```

### styles.css

```css
/* From Uiverse.io by mobinkakei - Tags: checkbox */
.checkmark {
 display: block;
 width: 30px;
 height: 30px;
 background-color: #ddd;
 border-radius: 10px;
 position: relative;
 transition: background-color 0.4s;
 overflow: hidden;
 cursor: pointer;
}

#check:checked ~ .checkmark {
 background-color: #08bb68;
}

.checkmark::after {
 content: "";
 position: absolute;
 width: 5px;
 height: 10px;
 border-right: 3px solid #fff;
 border-bottom: 3px solid #fff;
 top: 44%;
 left: 50%;
 transform: translate(-50%, -50%) rotateZ(40deg) scale(10);
 opacity: 0;
 transition: all 0.4s;
}

#check:checked ~ .checkmark::after {
 opacity: 1;
 transform: translate(-50%, -50%) rotateZ(40deg) scale(1);
}
```
