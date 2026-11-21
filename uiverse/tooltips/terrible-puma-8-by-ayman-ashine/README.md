# Terrible Puma 8

A tooltip UI element from Uiverse.io by ayman-ashine.

Source: https://uiverse.io/ayman-ashine/terrible-puma-8

Author: ayman-ashine

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<!-- From Uiverse.io by ayman-ashine  - Tags: tooltip, tailwindcss, flex-tooltip -->
<div class="flex flex-col items-center gap-2">
  <div class="group relative bg-zinc-300 p-2 rounded-full">
    <span>Top</span>
    <div
      class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2"
    >
      <span class="text-zinc-400 whitespace-nowrap">Info</span>
      <div
        class="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
      ></div>
    </div>
  </div>

  <div class="group relative bg-zinc-300 p-2 rounded-full">
    <span>Left</span>
    <div
      class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -left-2 -translate-x-full"
    >
      <span class="text-zinc-400 whitespace-nowrap">Info</span>
      <div
        class="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2"
      ></div>
    </div>
  </div>

  <div class="group relative bg-zinc-300 p-2 rounded-full">
    <span>Right</span>
    <div
      class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
    >
      <span class="text-zinc-400 whitespace-nowrap">Info</span>
      <div
        class="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
      ></div>
    </div>
  </div>

  <div class="group relative bg-zinc-300 p-2 rounded-full">
    <span>Bottom</span>
    <div
      class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2"
    >
      <span class="text-zinc-400 whitespace-nowrap">Info</span>
      <div
        class="bg-inherit rotate-45 p-1 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
      ></div>
    </div>
  </div>
</div>
```

### styles.css

```css
/* No CSS in source file */
```
