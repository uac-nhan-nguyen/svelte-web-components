<svelte:options tag="markdown-block" />

<script lang="ts">
  import MarkdownDisplay from "../markdown/MarkdownDisplay.svelte";

  export let content: string | undefined = undefined;
  export let src: string | undefined = undefined;
  export let className: string | undefined = undefined;

  if (src != null) {
    fetch(src)
      .then((res) => res.text())
      .then((text) => (content = text));
  }
  $: loading = content == null && src != null;
</script>

<div class="container">
  <link rel="stylesheet" href="/styles/prism-coy-without-shadows.css" />
  {#if loading}
    <div>Loading...</div>
  {:else}
    <MarkdownDisplay {content} />
  {/if}
</div>
