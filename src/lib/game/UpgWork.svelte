<script>
  import { _clicker } from "./store";
  export let label = "Workers Upgrade";
  export let setDaten;
  export let upgrade;
</script>

<button
  on:click={() => upgrade("worker")}
  class="btn btn-primary px-4 py-2"
  type="button"
  disabled={$_clicker.workercost >= $_clicker.money}>{label}</button
>
