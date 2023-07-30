<svelte:options tag="say-hi" />

<script>
  export let name = null;
  const code = '<say-hi name="Nhan"> </say-hi>';
</script>

<div>
  <p>This is <code>{code}</code></p>
</div>

<style>
  code {
    border: solid blue 2px;
    border-radius: 4px;
    padding: 4px 8px;
  }
</style>
