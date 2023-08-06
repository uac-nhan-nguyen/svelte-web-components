<svelte:options tag="code-block"/>

<script lang="ts">
  export let content: string | undefined = undefined;
  export let src: string | undefined = undefined;
  console.log({content, src})

  if (src != null) {
    fetch(src)
      .then(res => res.text())
      .then(text => content = text)
  }
  $: loading = content == null && src != null
</script>

<div class="container">
  {#if loading}
    <div>Loading...</div>
  {:else}
    <code>{content}</code>
  {/if}
</div>
