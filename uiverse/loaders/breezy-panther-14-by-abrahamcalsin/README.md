# Breezy Panther 14

A loader UI element from Uiverse.io by abrahamcalsin.

Source: https://uiverse.io/abrahamcalsin/breezy-panther-14

Author: abrahamcalsin

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #183153

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loaderRectangle">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by abrahamcalsin - Tags: loader */
.loaderRectangle {
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 0 3px;
}

.loaderRectangle div {
 width: 10px;
 height: 16px;
 animation: .9s ease-in-out infinite;
 background: #183153;
 box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.loaderRectangle div:nth-child(1) {
 animation-name: rectangleOneAnim;
 animation-delay: 1s;
}

@keyframes rectangleOneAnim {
 0% {
  height: 15px;
 }

 40% {
  height: 30px;
 }

 100% {
  height: 15px;
 }
}

.loaderRectangle div:nth-child(2) {
 animation-name: rectangleTwoAnim;
 animation-delay: 1.1s;
}

@keyframes rectangleTwoAnim {
 0% {
  height: 15px;
 }

 40% {
  height: 40px;
 }

 100% {
  height: 15px;
 }
}

.loaderRectangle div:nth-child(3) {
 animation-name: rectangleThreeAnim;
 animation-delay: 1.2s;
}

@keyframes rectangleThreeAnim {
 0% {
  height: 15px;
 }

 40% {
  height: 50px;
 }

 100% {
  height: 15px;
 }
}

.loaderRectangle div:nth-child(4) {
 animation-name: rectangleFourAnim;
 animation-delay: 1.3s;
}

@keyframes rectangleFourAnim {
 0% {
  height: 15px;
 }

 40% {
  height: 40px;
 }

 100% {
  height: 15px;
 }
}

.loaderRectangle div:nth-child(5) {
 animation-name: rectangleFiveAnim;
 animation-delay: 1.4s;
}

@keyframes rectangleFiveAnim {
 0% {
  height: 15px;
 }

 40% {
  height: 30px;
 }

 100% {
  height: 15px;
 }
}
```
