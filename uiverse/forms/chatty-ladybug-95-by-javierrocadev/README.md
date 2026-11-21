# Chatty Ladybug 95

A form UI element from Uiverse.io by Javierrocadev.

Source: https://uiverse.io/Javierrocadev/chatty-ladybug-95

Author: Javierrocadev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<!-- From Uiverse.io by Javierrocadev - Tags: blue, form, login form, tailwind -->
<div id="login" class="w-64 h-80 bg-indigo-50 rounded shadow flex flex-col justify-between p-3">       
    <form class="text-indigo-500" action="" method="post">
        <fieldset class="border-4 border-dotted border-indigo-500 p-5">
            <legend class="px-2 italic -mx-2">Welcome again!</legend>
             <label class="text-xs font-bold after:content-['*'] after:text-red-400" for="email">Mail </label>     
            <input class="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500" type="email" required="">   
            <label class="text-xs font-bold after:content-['*'] after:text-red-400" for="password">Password  </label>
            <input class="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500" type="password" required="">
            <a href="#" class="block text-right text-xs text-indigo-500 text-right mb-4">Forgot Password?</a>
            <button class="w-full rounded bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">Log In</button>
        </fieldset>
         </form>
</div>
```

### styles.css

```css
/* No CSS in source file */
```
