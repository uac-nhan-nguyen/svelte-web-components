```html
<nx-dropdown-on-click>
  <button slot="button" class="bg-slate-400 text-white p-2">{buttonLabel}</button>
  <div slot="dropdown" class="bg-slate-200 p-2 border-solid border-2 border-black">
    {#each [{ label: "Edit", value: "I'm changed" }, { label: "Delete", value: "I'm deleted" }] as item}
    <div
        class="hover:bg-slate-300 cursor-pointer"
        on:click={()
    => (buttonLabel = item.value)}
    >
    {item.label}
  </div>
  {/each}
  </div>
</nx-dropdown-on-click>
```
