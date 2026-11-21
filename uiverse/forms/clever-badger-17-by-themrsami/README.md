# Clever Badger 17

A form UI element from Uiverse.io by themrsami.

Source: https://uiverse.io/themrsami/clever-badger-17

Author: themrsami

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<!-- From Uiverse.io by themrsami - Tags: black, form, dark, product, tailwind, tailwindcss, feedback form, putple -->
<div class="flex flex-col items-center justify-center h-screen dark">
  <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-200 mb-4">Product Feedback Form</h2>

    <form class="flex flex-col">
      <input placeholder="Full Name" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text">
      <input placeholder="Email" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email">
      <select class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
        <option value="product-1">Product 1</option>
        <option value="product-2">Product 2</option>
        <option value="product-3">Product 3</option>
      </select>
      <input placeholder="Rating (1-5)" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number">
      <textarea placeholder="Feedback" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="feedback"></textarea>

      <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Submit</button>
    </form>
  </div>
</div>
```

### styles.css

```css
/* No CSS in source file */
```
