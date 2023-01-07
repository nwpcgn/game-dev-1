<script>
  import Settings from "./Settings.svelte";

  import { _clicker, _settings } from "./game/store";
  import ThemeSwitcher from "./appbar/ThemeSwitcher.svelte";
  import AppStoreBar from "./game/AppStoreBar.svelte";
  // import Renderless from "./lib/Renderless.svelte";
  import { onMount } from "svelte";
  let op1, op2, op3, op4, ready;

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

<!-- <Renderless id="Resizer" />  -->

<svelte:head>
  <title>nwp-game-settings</title>
</svelte:head>

<!-- <AppBar /> -->

<main>
  <div class="container">
    <Settings />

    <article>
      <header>Game Storage</header>
      <AppStoreBar />
    </article>
    <article>
      <header>Theme Switcher</header>
      <ThemeSwitcher />
    </article>
    <!--  <Panel>
      <TabUnit />
    </Panel>
    <Panel>
      <TabCats />
    </Panel>
    <Panel>
      <TabWork />
    </Panel> -->
  </div>
</main>

<style>
  main {
    margin-top: 3rem;
  }
</style>
