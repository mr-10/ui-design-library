# Slimy Warthog 37

A radio button UI element from Uiverse.io by Pradeepsaranbishnoi.

Source: https://uiverse.io/Pradeepsaranbishnoi/slimy-warthog-37

Author: Pradeepsaranbishnoi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: radio

Colors: #0043ed, #2260ff, #3e4963, #b5bfd9, #b5c9fc, #dee7ff, #fff

Fonts: See styles.css

Spacing and radius: .375em 0 0 .375em, 0 .375em .375em 0

## Source Code

### index.html

```html
<div class="mydict">
	<div>
		<label>
			<input type="radio" name="radio" checked="">
			<span>Women</span>
		</label>
		<label>
			<input type="radio" name="radio">
			<span>Men</span>
		</label>
		<label>
			<input type="radio" name="radio">
			<span>Divided</span>
		</label>
		
	</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Pradeepsaranbishnoi - Tags: radio */
:focus {
  outline: 0;
  border-color: #2260ff;
  box-shadow: 0 0 0 4px #b5c9fc;
}

.mydict div {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  justify-content: center;
}

.mydict input[type="radio"] {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.mydict input[type="radio"]:checked + span {
  box-shadow: 0 0 0 0.0625em #0043ed;
  background-color: #dee7ff;
  z-index: 1;
  color: #0043ed;
}

label span {
  display: block;
  cursor: pointer;
  background-color: #fff;
  padding: 0.375em .75em;
  position: relative;
  margin-left: .0625em;
  box-shadow: 0 0 0 0.0625em #b5bfd9;
  letter-spacing: .05em;
  color: #3e4963;
  text-align: center;
  transition: background-color .5s ease;
}

label:first-child span {
  border-radius: .375em 0 0 .375em;
}

label:last-child span {
  border-radius: 0 .375em .375em 0;
}
```
