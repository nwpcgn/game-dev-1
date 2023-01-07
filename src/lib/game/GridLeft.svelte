<script>
  import { _clicker } from "./store";
</script>

{#key $_clicker.upown}
  <div style="background-image: url(./img/dandy1{$_clicker.upown}.png);" />
{/key}

<style>
  div {
    height: 100%;
    max-height: 300px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    opacity: 1;
    transition: all 200ms ease-in-out;
  }
</style>
