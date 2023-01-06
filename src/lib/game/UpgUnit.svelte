<script>
  import { _clicker } from "./store";
  export let label = "Unit Upgrade";
  export let setDaten;
  export let upgrade;
</script>

<button
  on:click={() => upgrade("upgrade")}
  class="btn btn-primary px-4 py-2"
  type="button"
  disabled={$_clicker.upcost >= $_clicker.money}>{label}</button
>
