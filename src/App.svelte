<script lang="ts">
  import logo from "./assets/logo.svg";

  let buttonLabel = "Hit me";

  const example1 = `
  <nx-dropdown-on-click>
    <button slot="button" class="bg-slate-400 text-white p-2">{buttonLabel}</button>
    <div slot="dropdown" class="bg-slate-200 p-2 border-solid border-2 border-black" >
      {#each [{ label: "Edit", value: "I'm changed" }, { label: "Delete", value: "I'm deleted" }] as item}
        <div
          class="hover:bg-slate-300 cursor-pointer"
          on:click={() => (buttonLabel = item.value)}
        >
          {item.label}
        </div>
      {/each}
    </div>
  </nx-dropdown-on-click>
  `;
</script>

<svelte:head>
  <script
    src="/src/web-components/Hello.component.svelte"
    type="module"
  ></script>
  <script src="/src/web-components/Hi.component.svelte" type="module"></script>
  <script
    src="/src/web-components/Code.component.svelte"
    type="module"
  ></script>
  <script
    src="/src/web-components/DropdownOnClick.component.svelte"
    type="module"
  ></script>
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

  <pre>{example1}</pre>
  <nx-dropdown-on-click>
    <button slot="button" class="bg-slate-400 text-white p-2"
      >{buttonLabel}</button
    >
    <div
      slot="dropdown"
      class="bg-slate-200 p-2 border-solid border-2 border-black"
    >
      {#each [{ label: "Edit", value: "I'm changed" }, { label: "Delete", value: "I'm deleted" }] as item}
        <div
          class="hover:bg-slate-300 cursor-pointer"
          on:click={() => (buttonLabel = item.value)}
          on:keypress={() => (buttonLabel = item.value)}
        >
          {item.label}
        </div>
      {/each}
    </div>
  </nx-dropdown-on-click>

  <say-code> const a = 1 </say-code>
  <say-hi name="Nhan" />
  <say-hello name="Nhan" />
  <say-code> const a = 1 </say-code>
</main>
