<script>
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
</script>

{#if !isClicked}
  <div style="background-image: url(./img/meiko0.jpg);" />
{:else}
  <div style="background-image: url(./img/meiko1.jpg);" />
{/if}

<section
  on:mousedown={() => (isClicked = true)}
  on:mouseup={() => (isClicked = false)}
  on:click={clicked}
/>

<style>
  section {
    position: fixed;
    top: 0;
    bottom: 0;
    left: calc(50% - 200px);
    width: 400px;
    z-index: 30;
    cursor: pointer;
  }
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
</style>
