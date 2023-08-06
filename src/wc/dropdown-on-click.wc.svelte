<svelte:options tag="dropdown-on-click" />

<script>
  let isOpen = false;

  const toggle = () => (isOpen = !isOpen);
  const close = () => (isOpen = false);
</script>

<div class="container">
  <div
    class="close-layer {isOpen ? 'close-layer-open' : ''}"
    on:click={close}
    on:keypress={close}
  />
  <div on:click={toggle} on:keypress={toggle}>
    <slot name="button" />
  </div>
  <div
    class="dropdown {isOpen ? 'dropdown-open' : ''}"
    on:click={close}
    on:keypress={close}
  >
    <slot name="dropdown" />
  </div>
</div>

<style>
  .container {
    position: relative;
  }
  .dropdown {
    position: absolute;
    left: 0;

    opacity: 0;
    pointer-events: none;

    transition: all ease 0.3s;
    transform: translate(0, -16px);
  }

  .dropdown-open {
    opacity: 1;
    pointer-events: all;
    transform: translate(0, 0px);
  }

  .close-layer {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    cursor: n-resize;
  }
  .close-layer-open {
    display: block;
  }
</style>
