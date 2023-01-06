<script>
  import { _clicker } from "./store";
  export let label = "Cats Upgrade";
  export let setDaten;
  export let upgrade;
</script>

<button
  on:click={() => upgrade("clicker cat")}
  class="btn btn-primary px-4 py-2"
  type="button"
  disabled={$_clicker.catcost >= $_clicker.money}>{label}</button
>
