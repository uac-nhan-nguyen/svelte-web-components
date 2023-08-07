<script lang="ts">
  import Prism from "svelte-prism";
  import 'prismjs/components/prism-json';
  import 'prismjs/components/prism-json5';
  import 'prismjs/components/prism-bash';
  import 'prismjs/components/prism-dart';
  import 'prismjs/components/prism-typescript';
  import 'prismjs/components/prism-jsx';
  import 'prismjs/components/prism-tsx';
  import 'prismjs/components/prism-yaml';

  let className = $$restProps.class;
  export let classLabel = '';
  export let lang = undefined;
  export let source;
  export let label = undefined;

  $: {
    // if ((lang || label) && !source?.startsWith("\n")) source = "\n" + source;
  }
</script>

<div class="container {className || 'container-default'}">
  {#if lang || label}
    <div class="language-tag {classLabel || 'color'}">{lang} {label?`| ${label}`:''}</div>
  {/if}
  <div>
    <Prism language={lang} {source} />
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    display: flex;
    flex-direction: column;

    .language-tag {
      position: sticky;
      z-index: 1;
      top: 0;
      left: 0;
      width: fit-content;

      padding: 0 0.5em;

      font-size: 1em;
      line-height: 1.5;
    }

    .color {
      background-color: #d4d4d4;
    }

    &-default {
      overflow: auto;
    }
  }
</style>
