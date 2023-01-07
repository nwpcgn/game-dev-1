<script>
  import GridLeft from "./game/GridLeft.svelte";

  import GridRight from "./game/GridRight.svelte";

  import CssGrid from "./CssGrid.svelte";

  import { onMount, onDestroy } from "svelte";
  import { _clicker } from "./game/store";
  const addcomma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const myTimer = () => {
    $_clicker.money = $_clicker.money + $_clicker.msec;
  };

  const clicked = () => {
    $_clicker.money = $_clicker.money + $_clicker.moneyup;
  };
  const interval = setInterval(myTimer, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });

  console.log("Canvas: initialized");

  onMount(() => {
    console.log("Canvas: mounted");
    interval;
  });
  let isClicked;
  let img = {
    on: './img/sc05.png',
    off: './img/sc06.png'
  }
</script>

<div
  style="
  background-image: url(./img/fedorcbg.jpg); 
  z-index: 22; 
  background-size: cover;"
/>

<CssGrid>
  <svelte:fragment slot="left">
    <GridLeft src="./img/dandy11.png" />
  </svelte:fragment>
  <svelte:fragment slot="right">
    <GridRight src="./img/sfw01.png" />
  </svelte:fragment>

  <section
    on:mousedown={() => (isClicked = true)}
    on:mouseup={() => (isClicked = false)}
    on:click={clicked}
    class:isClicked={isClicked}
    style="background-image: url({isClicked ? img.on :img.off});"
  />
</CssGrid>

<!-- <section
  on:mousedown={() => (isClicked = true)}
  on:mouseup={() => (isClicked = false)}
  on:click={clicked}
/> -->
<style>
  div {
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 1;
    transition: all 200ms ease-in-out;
  }
  section {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    max-height: 80%;
    z-index: 30;
    margin: 0;
    padding: 0;
    /* background-image: url(./img/fed00.png); */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    opacity: 1;
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }
  section.isClicked {
    background-image: url(./img/fed02.png);
  }
</style>
