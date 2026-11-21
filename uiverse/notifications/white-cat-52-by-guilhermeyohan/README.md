# White Cat 52

A notification UI element from Uiverse.io by guilhermeyohan.

Source: https://uiverse.io/guilhermeyohan/white-cat-52

Author: guilhermeyohan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: notification

Colors: #2ed603a1, #ffffff

Fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="level-up-notification">
  <p class="kdkkkd">Congratulations! You have reached level 10!</p>
</div>
```

### styles.css

```css
/* From Uiverse.io by guilhermeyohan - Tags: notification */
.level-up-notification {
  width: 330px;
  margin: auto;
  background-color: #2ed603a1;
  border-radius: 10px;
  padding: 20px;
  animation: pulse 2s ease infinite, slide-in 1.5s ease;
}

.level-up-notification p.kdkkkd {
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 2px rgba(60, 59, 59, 0.754);
}

@keyframes slide-in {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
```
