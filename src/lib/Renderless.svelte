<script>
    import { onMount } from "svelte";
    export let id = "NoId"
    console.log(`Renderless ${id}: initialized`);
    import {
      width,
      height,
      pixelRatio,
    } from "./app_store";
  
    function handleResize() {
      width.set(window.innerWidth);
      height.set(window.innerHeight);
      pixelRatio.set(window.devicePixelRatio);
    };
  
    onMount(() => {
        console.log(`Renderless ${id}: mounted`);
    });
  </script>
 
  <slot />
    
  <svelte:window on:resize|passive={handleResize} />
