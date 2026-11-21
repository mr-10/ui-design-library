# Sour Jellyfish 99

A card UI element from Uiverse.io by Jarol20cb.

Source: https://uiverse.io/Jarol20cb/sour-jellyfish-99

Author: Jarol20cb

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, animated, console

Colors: #222, #5c6370, #61afef, #98c379, #c678dd, #dcdcaa, #f9f9f9, #fff

Fonts: See styles.css

Spacing and radius: 10px, 8px

## Source Code

### index.html

```html
<div id="card" class="card">
  <div class="content">
    <div class="card-body">
      <div class="code-container float-animation">
        <span class="line"><span class="code-comment">// Código de ejemplo</span></span>
        <span class="line"><span class="code-keyword">function</span> <span class="code-function">example</span>()</span>
        <span class="line">{</span>
        <span class="line indent"><span class="code-keyword">let</span> <span class="code-variable">message</span> = <span class="code-string">"Hello, World!"</span>;</span>
        <span class="line indent"><span class="code-built-in">console</span>.<span class="code-method">log</span>(<span class="code-variable">message</span>);</span>
        <span class="line">}</span>
      </div>
    </div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Jarol20cb - Tags: card, animated, console */
.card {
  width: 200px;
  height: 200px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.code-container {
  background-color: #222;
  border-radius: 8px;
  padding: 16px;
}

.line {
  display: block;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  margin: 4px 0;
  position: relative;
}

.code-comment {
  color: #5c6370;
}

.code-keyword {
  color: #c678dd;
}

.code-function {
  color: #61afef;
}

.code-variable {
  color: #dcdcaa;
}

.code-string {
  color: #98c379;
}

.indent {
  padding-left: 20px;
}

/* Animación */
@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

.float-animation {
  animation: float 2s ease-in-out infinite;
}
```
