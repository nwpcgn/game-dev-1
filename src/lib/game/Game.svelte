<script>
  import CgUpgrader from "./CgUpgrader.svelte";

  import { _clicker } from "./store";
  import { onMount, onDestroy } from "svelte";

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

  onMount(() => interval);
</script>



