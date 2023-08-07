
# `markdown-block`

```html
<head>
  <script src="{DOMAIN}/wc/markdown-block.js" type="module"></script>
</head>

<body>
  <markdown-block src="/hello_example.md"></markdown-block>
</body>
```

# `dropdown-on-click`

```html
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="/src/wc/dropdown-on-click.wc.svelte" type="module"></script>
  <script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/latest/button.min.js"></script>
</head>

<body>
  <dropdown-on-click>
    <bx-btn slot="button">Hit me</bx-btn>
    <div slot="dropdown" class="border-black">
      <a href="/" class="grid">
        <bx-btn kind="tertiary">Home</bx-btn>
      </a>
      <a href="/example.html" class="grid">
        <bx-btn kind="tertiary">Example</bx-btn>
      </a>
    </div>
  </dropdown-on-click>
</body>
```
