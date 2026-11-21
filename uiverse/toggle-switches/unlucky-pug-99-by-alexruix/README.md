# Unlucky Pug 99

A toggle switch UI element from Uiverse.io by alexruix.

Source: https://uiverse.io/alexruix/unlucky-pug-99

Author: alexruix

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<!-- From Uiverse.io by alexruix  - Website: https://www.hyperui.dev/components/application-ui/toggles - Name: GlintonLiao - Tags: simple, material design, switch, theme-switch, toggle, toggle switch, grey -->
<label
  class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
  for="switch"
>
  <input class="peer sr-only" id="switch" type="checkbox" />

  <span class="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>

  <span
    class="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0"
  >
    <span
      class="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition"
    >
    </span>
  </span>
</label>
```

### styles.css

```css
/* No CSS in source file */
```
