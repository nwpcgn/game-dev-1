<!-- src/lib/Container.svelte -->
<script>
  import { onMount } from "svelte";
  import {
    key,
    width,
    height,
    canvas as canvasStore,
    context as contextStore,
    pixelRatio,
    props,
    time,
  } from "./app_store";

  function handleResize() {
    width.set(window.innerWidth);
    height.set(window.innerHeight);
    pixelRatio.set(window.devicePixelRatio);
  };

  console.log("Container: initialized");
  onMount(() => {
    console.log("Container: mounted");
  });
  $: console.log($width, $height);
</script>



<header>
  <h1>The container of things</h1>
</header>

<slot />


<svelte:window on:resize|passive={handleResize} />



<style>
  header {
    margin: 0 0 0 0;
  }
</style>
