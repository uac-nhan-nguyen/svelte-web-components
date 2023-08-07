<script lang="ts">
  import logo from "./assets/logo.svg";

  let buttonLabel = "Hit me";
</script>

<svelte:head>
  <script src="/src/wc/code-block.wc.svelte" type="module"></script>
  <script src="/src/wc/markdown-block.wc.svelte" type="module"></script>
  <script src="/src/wc/dropdown-on-click.wc.svelte" type="module"></script>
  <script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/latest/button.min.js" ></script>
</svelte:head>

<main class="items-center justify-items-center grid w-full gap-4 mt-[40px]">
  <div>
    <a
      href="https://github.com/uac-nhan-nguyen/svelte-tailwind-kit"
      target="_blank"
      rel="noreferrer"
    >
      <img src={logo} class="h-40" alt="N Logo" />
    </a>
  </div>
  <h1 class="text-3xl">
    <a href="https://svelte.dev/docs" target="_blank">Svelte</a>
    +
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components"
      target="_blank">Web Components</a
    >
  </h1>

  <markdown-block src="/hello_example.md" />

  <dropdown-on-click>
    <bx-btn slot="button">{buttonLabel}</bx-btn>
    <div slot="dropdown" class="grid border-black" >
      {#each [{ label: "Edit", value: "I'm changed" }, { label: "Delete", value: "I'm deleted" }, { label: "Example", href: "/example.html" }] as item}
        {#if item.value}
          <bx-btn
            kind="tertiary"
            on:click={() => (buttonLabel = item.value)}
            on:keypress={() => (buttonLabel = item.value)}
          >
            {item.label}
          </bx-btn>
        {:else if item.href}
          <a class="hover:bg-slate-300 cursor-pointer" href={item.href}>
            <bx-btn kind="tertiary">
              {item.label}
            </bx-btn>
          </a>
        {/if}
      {/each}
    </div>
  </dropdown-on-click>
</main>
