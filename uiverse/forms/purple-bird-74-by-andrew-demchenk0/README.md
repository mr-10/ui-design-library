# Purple Bird 74

A form UI element from Uiverse.io by andrew-demchenk0.

Source: https://uiverse.io/andrew-demchenk0/purple-bird-74

Author: andrew-demchenk0

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: order, form

Colors: #212529, #4b4b4b

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<section class="section_form">
  <form id="consultation-form" class="feed-form" action="#">
    <input required="" placeholder="Name" type="text">
    <input name="phone" required="" placeholder="Phone number">
    <input name="email" required="" placeholder="E-mail" type="email">
    <button class="button_submit">ORDER</button>
  </form>
</section>
```

### styles.css

```css
/* From Uiverse.io by andrew-demchenk0 - Tags: order, form */
.feed-form {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  width: 300px;
}

.feed-form input {
  height: 54px;
  border-radius: 5px;
  background: white;
  margin-bottom: 15px;
  border: none;
  padding: 0 20px;
  font-weight: 300;
  font-size: 14px;
  color: #4B4B4B;
}

.button_submit:hover, .feed-form input:hover {
  transform: scale(1.009);
  box-shadow: 0px 0px 3px 0px #212529;
}

.button_submit {
  width: 100%;
  height: 54px;
  font-size: 14px;
  color: white;
  background: red;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  text-transform: uppercase;
}
```
