# Cold Lionfish 49

A form UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/cold-lionfish-49

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: subscription, form

Colors: #111, #333, #fff

Fonts: See styles.css

Spacing and radius: 14px, 20px

## Source Code

### index.html

```html
<div class="card">
    <span class="card__title">Subscribe</span>
    <p class="card__content">Get fresh web design resources delivered straight to your inbox every week.
    </p>
    <div class="card__form">
        <input placeholder="Your Email" type="text">
        <button class="sign-up"> Sign up</button>
    </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: subscription, form */
.card {
  width: 240px;
  height: 254px;
  padding: 0 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  background: #fff;
  border-radius: 20px;
}

.card > * {
  margin: 0;
}

.card__title {
  font-size: 23px;
  font-weight: 900;
  color: #333;
}

.card__content {
  font-size: 13px;
  line-height: 18px;
  color: #333;
}

.card__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card__form input {
  margin-top: 10px;
  outline: 0;
  background: rgb(255, 255, 255);
  box-shadow: transparent 0px 0px 0px 1px inset;
  padding: 0.6em;
  border-radius: 14px;
  border: 1px solid #333;
  color: black;
}

.card__form button {
  border: 0;
  background: #111;
  color: #fff;
  padding: 0.68em;
  border-radius: 14px;
  font-weight: bold;
}

.sign-up:hover {
  opacity: 0.8;
}
```
