# Silent Dodo 36

A input UI element from Uiverse.io by kamehame-ha.

Source: https://uiverse.io/kamehame-ha/silent-dodo-36

Author: kamehame-ha

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, clean, bash, cmd, linux

Colors: #0f172a, #2dd4bf, #a78bfa, #e879f9

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<div class="input-container">
  <p class="bash-text">
    <span class="user">user</span><span class="vm">@ui-verse</span>:<span class="char">~</span>$
  </p>
  <input class="input" placeholder="sudo rm -rf css/" type="text">
</div>
```

### styles.css

```css
/* From Uiverse.io by kamehame-ha - Tags: input, clean, bash, cmd, linux */
.input-container {
  display: flex;
  align-items: center;
  background-color: #0F172A;
  padding: 10px 15px;
  gap: 5px;
  border-radius: 20px;
}

.input-container .bash-text {
  font-size: .8rem;
  color: white;
}

.input-container .bash-text .user {
  color: #E879F9;
}

.input-container .bash-text .vm {
  color: #2DD4BF;
}

.input-container .bash-text .char {
  color: #A78BFA;
}

.input-container input[type=text].input {
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
}
```
