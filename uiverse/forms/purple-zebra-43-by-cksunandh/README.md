# Purple Zebra 43

A form UI element from Uiverse.io by Cksunandh.

Source: https://uiverse.io/Cksunandh/purple-zebra-43

Author: Cksunandh

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: form

Colors: #007bff, #6c757d, #b8bcbf, #e2e6ea

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="file-upload-container">
  <div class="file-upload">
    <input multiple="" class="file-input" id="fileInput" type="file" />
    <label class="file-label" for="fileInput">
      <i class="upload-icon">📁</i>
      <p>Drag &amp; Drop your files here or click to upload</p>
    </label>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Cksunandh  - Tags: form */
.file-upload-container {
  width: 50%;
  max-width: 500px;
}

.file-upload {
  position: relative;
  border: 2px dashed #b8bcbf;
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  transition: background-color 0.3s ease-in-out;
}

.file-upload:hover {
  background-color: #e2e6ea;
}

.file-input {
  display: none;
}

.file-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.upload-icon {
  font-size: 50px;
  color: #007bff;
  margin-bottom: 10px;
}

.file-upload p {
  margin: 0;
  font-size: 16px;
  color: #6c757d;
}

.file-upload.dragover {
  background-color: #007bff;
  color: white;
}
```
