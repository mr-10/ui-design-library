# Tasty Bobcat 17

A button UI element from Uiverse.io by Remelens.

Source: https://uiverse.io/Remelens/tasty-bobcat-17

Author: Remelens

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, light, windows11

Colors: #000, #005499, #0078d4, #aaa, #cce4f7, #e0eef9, #fff

Fonts: Menlo, Monaco, Consolas, "Lucida Console", "Ubuntu Mono",
    "Microsoft YaHei UI", "PingFang SC", "Noto Sans CJK SC", "SimHei"

Spacing and radius: 2.5px

## Source Code

### index.html

```html
<button class="button">Button</button>
```

### styles.css

```css
/* From Uiverse.io by Remelens  - Tags: button, light, windows11 */
.button {
  display: inline-block;
  text-align: center;
  border: 0.9px solid #aaa;
  border-radius: 2.5px;
  background: #fff;
  cursor: pointer;
  color: #000;
  min-width: 80px;
  padding: 4px 0;
  margin: 0 5px;
  line-height: 20px;
  transition: all 0.2s;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: Menlo, Monaco, Consolas, "Lucida Console", "Ubuntu Mono",
    "Microsoft YaHei UI", "PingFang SC", "Noto Sans CJK SC", "SimHei";
}
.button:hover {
  border-color: #0078d4;
  background: #e0eef9;
  transition: all 0.2s;
}
.button:active {
  border-color: #005499;
  background: #cce4f7;
  transition: all 0.2s;
}
```
