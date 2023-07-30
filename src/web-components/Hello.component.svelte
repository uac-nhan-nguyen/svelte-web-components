<svelte:options tag="say-hello" />

<script>
  export let name = null;
  const code = '<say-hello name="Nhan"> </say-hello>';
</script>

<div>
  <p>This is <code>{code}</code></p>
</div>

<style>
  code {
    border: solid black 2px;
    border-radius: 4px;
    padding: 4px 8px;
  }
</style>
