# Cuddly Yak 64

A toggle switch UI element from Uiverse.io by omriluz.

Source: https://uiverse.io/omriluz/cuddly-yak-64

Author: omriluz

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<!-- From Uiverse.io by omriluz - Tags: animation, red, green, gradient, switch, toggle, gradients, tailwind -->
<label class="relative block aspect-[2/0.75] cursor-pointer w-20 rounded-full  bg-gradient-to-r from-red-600 to-green-600 bg-[length:100%_100%] shadow-2xl shadow-purple-300 transition-all duration-500 [&amp;:has(input:checked)]:rotate-180  hover:bg-[length:100%_500%] focus:bg-[length:100%_500%]">
  <input type="checkbox" class="peer/input hidden">
  <div class="absolute left-[3%] top-1/2 aspect-square h-[90%] -translate-y-1/2 rotate-180 rounded-full bg-white transition-all duration-500 peer-checked/input:left-[63%] peer-checked/input:-rotate-6"></div>
</label>
```

### styles.css

```css
/* No CSS in source file */
```
