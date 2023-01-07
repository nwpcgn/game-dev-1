<script>
  import { onMount } from "svelte";

  console.log("CssGrid: initialized");

  onMount(() => {
    console.log("CssGrid: mounted");
  });

</script>

<div class="container-grid">
  <aside class="Left">
    <slot name="left"><!-- optional fallback --></slot>
  </aside>
  <div class="Main"><slot><!-- optional fallback --></slot></div>
  <aside class="Right">
    <slot name="right"><!-- optional fallback --></slot>
  </aside>
</div>

<style>
  .container-grid {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-areas: "Left Main Right";
    grid-template-columns: 1fr 80% 1fr;
    grid-template-rows: 1fr;
  }
  .container-grid > div {
    position: relative;
    border: 1px dashed #888;
  }

  .Left {
    grid-area: Left;
    display: flex;
    flex-direction: column-reverse;
  }
  .Main {
    grid-area: Main;
  }
  .Right {
    grid-area: Right;
    display: flex;
    flex-direction: column-reverse;
  }
</style>
