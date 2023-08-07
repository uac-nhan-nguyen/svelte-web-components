<script lang="ts">
  import PrismWrapper from "./PrismWrapper.svelte";

  export let el: HTMLElement;

  let source, lang;

  $: {
    if (el instanceof HTMLPreElement && el.children.length > 0) {
      const first = el.children[0];
      if (first.tagName === "CODE" && first instanceof HTMLElement) {
        source = first.innerText;
        lang = first.className
          .split(" ")
          .find((i) => i.startsWith("lang"))
          ?.split("-")[1];
      }
    }
  }
</script>

{#if el instanceof HTMLPreElement}
  {#if source}
    <PrismWrapper class="pre-wrapper" {lang} {source} />
  {/if}
{:else if el.tagName === "H1"}
  <div class="h1-wrapper">
    <h1>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h1>
    <span class={'tag'}>{el.tagName}</span>
  </div>
{:else if el.tagName === "H2"}
  <div class="h2-wrapper">
    <h2>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h2>
    <span class={'tag'}>{el.tagName}</span>
  </div>
{:else if el.tagName === "H3"}
  <div class="h3-wrapper">
    <h3>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h3>
    <span class={'tag'}>{el.tagName}</span>
  </div>
{:else if el.tagName === "H4"}
  <div class="h4-wrapper">
    <h4>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h4>
    <span class={'tag'}>{el.tagName}</span>
  </div>
{:else if el.tagName === "H5"}
  <div class="h5-wrapper">
    <h5>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </h5>
    <span class={'tag'}>{el.tagName}</span>
  </div>
{:else if el.tagName === "BR"}
  <br />
{:else if el.tagName === "HR"}
  <hr />
{:else if el instanceof HTMLAnchorElement && !isNaN(parseInt(el.innerText))}
  <sup>
    <a href={el.href} target="_blank">
      [{el.innerText}]
    </a>
  </sup>
{:else if el instanceof HTMLAnchorElement}
  <a href={el.href} target="_blank">
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </a>
{:else if el instanceof HTMLParagraphElement}
  <p>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </p>
{:else if el.tagName === "STRONG"}
  <strong>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </strong>
{:else if el.tagName === "EM"}
  <em>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </em>
{:else if el.tagName === "OL"}
  <ol>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </ol>
{:else if el.tagName === "UL"}
  <ul>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </ul>
{:else if el.tagName === "LI"}
  <li>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </li>
{:else if el.tagName === "CODE"}
  <code class="px-1 bg-red-100">
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </code>
{:else if el.tagName === "BLOCKQUOTE"}
  <blockquote class="px-1 bg-neutral-200">
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </blockquote>
{:else if el instanceof HTMLImageElement}
  <img alt={el.alt} src={el.src} />
{:else if el.tagName === "PICTURE"}
  <picture contenteditable="false" bind:innerHTML={el.innerHTML} />
{:else if el.tagName === "TABLE"}
  <div class="table-container">
    <table>
      {#each el.childNodes as child}
        <svelte:self el={child} />
      {/each}
    </table>
  </div>
{:else if el.tagName === "THEAD"}
  <thead>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </thead>
{:else if el.tagName === "TBODY"}
  <tbody>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </tbody>
{:else if el.tagName === "TR"}
  <tr>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </tr>
{:else if el.tagName === "TH"}
  <th>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </th>
{:else if el.tagName === "TD"}
  <td>
    {#each el.childNodes as child}
      <svelte:self el={child} />
    {/each}
  </td>
{:else if el instanceof Text}
  {el.wholeText}
{:else}
  <div class="font-bold text-red-600">
    Unhandle: <br />
    <div>[{el.tagName}]</div>
    <div>{el.outerHTML}</div>
  </div>
{/if}

<style lang="scss">
  ul,
  ol {
    padding-left: 16px;
  }
  h1 {
    font-size: 28px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  // no-underline hover:underline text-blue-700
  a {
    color: #1d4ed8;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  blockquote {
    border-left: solid 8px #ef4444;
    background-color: white;
    color: #404040;
  }

  .table-container {
    overflow: auto;
  }

  td {
    padding: 2px 4px;
  }

  tr:nth-child(odd) {
    background-color: #fafafa;
  }
  tr:nth-child(even) {
    background-color: #e7e5e4;
  }

  img {
    max-width: min(100%, 600px);
  }

  :global(.pre-wrapper) {
    margin: 14px 0;
    overflow: auto;
    max-height: 30em;
    font-size: 12px;
    border: solid 1px rgb(212, 212, 212);
  }

  :global(pre) {
    margin: 0;
  }

  .h1-wrapper {
    display: flex;
    align-items: baseline;
    border-width: 0;
    border-bottom-width: 2px;
    border-style: dashed;
    border-color: #525252;
  }

  // flex items-baseline border-0 border-b-1 border-solid border-neutral-300 mb-[8px]
  .h2-wrapper {
    display: flex;
    align-items: baseline;
    border-width: 0;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: #d4d4d4;
    margin-bottom: 8px;
  }

  // flex items-baseline
  .h3-wrapper,
  .h4-wrapper,
  .h5-wrapper {
    display: flex;
    align-items: baseline;
  }

  // const tagClass = "ml-2 font-mono font-bold text-neutral-400 text-[11px]";
  .tag {
    margin-left: 0.5rem;
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      monospace;
    font-weight: bold;
    color: #a1a1aa;
    font-size: 11px;
  }
</style>
