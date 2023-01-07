<script>
  import Game3 from "./lib/Game3.svelte";
  import Game2 from "./lib/Game2.svelte";
  import { onMount } from "svelte";
  import AppBar from "./lib/appbar/AppBar.svelte";
  import Game1 from "./lib/Game1.svelte";

  import url from "./lib/util/url";
  console.log("App: initialized");
  onMount(() => {
    console.log("App: mounted");
  });
  $: console.log($url.hash);
</script>

<!-- <Renderless id="Resizer" />  -->

<svelte:head>
  <title>nwp-game</title>
</svelte:head>

<AppBar />

{#if $url.hash === "" || $url.hash === "#/"}
  <Game1 />
{:else if $url.hash === "#/settings"}
  <Game3 />
{:else if $url.hash === "#/upgrades"}
  <Game2 />
{:else}
  <main>
    <div class="container">
      <h1>404</h1>
    </div>
  </main>
{/if}

<style>
  main {
    margin-top: 3rem;
  }
</style>
