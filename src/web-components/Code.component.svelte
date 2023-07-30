<svelte:options tag="say-code" />

<script>
</script>

<div>
  <p>
    This is wrap the children in code 
    <code>
      <slot />
    </code>
  </p>
</div>

<style>
  code {
    border: solid blue 2px;
    border-radius: 4px;
    padding: 4px 8px;
  }
</style>
