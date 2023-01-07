<script>
  import { _clicker, _settings } from "./game/store";
  import { onMount } from "svelte";
  let op1, op2, op3, op4, ready;
  export let labels = ["Option 1", "Option 2", "Option 3", "Option 4"];
  export let id = "settings"
  /* let HTML = document.querySelector("html");
  const changeTheme = () => {
      if (HTML.dataset.theme && HTML.dataset === 'light') {
        HTML.setAttribute("data-theme", "dark")
      } else {
        HTML.setAttribute("data-theme", "dark")
      }
  }; */
  console.log("Game-Settings: initialized");
  onMount(() => {
    let s = $_settings;
    op1 = s.op1;
    op2 = s.op2;
    op3 = s.op3;
    op4 = s.op4;
    ready = true;
    console.log("Game-Settings: mounted");
  });
  $: if (ready) {
    $_settings = {
      op1: op1,
      op2: op2,
      op3: op3,
      op4: op4,
    };
  }
</script>

{#if ready}
  <article {id}>
    <header>Settings</header>
    <div class="grid">
      <fieldset>
        <label for="switch">
          <input
            type="checkbox"
            bind:checked={op1}
            name="switch"
            role="switch"
          />
          {labels[0]}
        </label>
        <label for="switch_disabled">
          <input
            type="checkbox"
            bind:checked={op2}
            name="switch"
            role="switch"
          />
          {labels[1]}
        </label>
      </fieldset>
      <fieldset>
        <label for="switch">
          <input
            type="checkbox"
            bind:checked={op3}
            name="switch"
            role="switch"
          />
          {labels[2]}
        </label>
        <label for="switch_disabled">
          <input
            type="checkbox"
            bind:checked={op4}
            name="switch"
            role="switch"
          />
          {labels[3]}
        </label>
      </fieldset>
    </div>
  </article>
{/if}

<style>
</style>
