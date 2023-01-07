<script>
  import TabWork from "./game/TabWork.svelte";
  import TabCats from "./game/TabCats.svelte";
  import Settings from "./Settings.svelte";
  import TabUnit from "./game/TabUnit.svelte";
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
  const fig = [
    "./img/dandy10.png",
    "./img/dandy11.png",
    "./img/dandy12.png",
    "./img/dandy13.png",
    "./img/dandy14.png",
    "./img/dandy15.png",
    "./img/dandy16.png",
    "./img/dandy17.png",
  ];
</script>

<!-- <Renderless id="Resizer" />  -->

<svelte:head>
  <title>nwp-upgrades</title>
</svelte:head>

<!-- <AppBar /> -->

<main>
  <div class="container">
    <article>
      <header>Unit</header>
      <TabUnit />
      <div class="grid">
        {#each fig as item, i}
           <figure class:active={$_clicker.upown == i}>
            <img src={item} alt="">
           </figure>
        {/each}
      </div>
    </article>
    <article>
      <header>Cats</header>
      <TabCats />
    </article>
    <article>
      <header>Workers</header>
      <TabWork />
    </article>
  </div>
</main>

<style>
  main {
    margin-top: 3rem;
  }
  figure {
    opacity: 0.25;
    text-align: center;
  }
  figure.active {
    opacity: 1;
  }
  figure img {
    max-height: 150px;
  }
</style>
