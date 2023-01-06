<script>
  import { _clicker } from "./store";

  const save = () => {
    try {
      let o = JSON.stringify($_clicker);
      if (o) localStorage.setItem("nwp_game", o);
    } catch (error) {
      console.error(error.message);
    }
  };

  const load = () => {
    if (!localStorage.getItem("nwp_game")) return;
    try {
      let d = JSON.parse(localStorage.getItem("nwp_game"));
      if (d) {
        $_clicker.money = parseInt(d.money);
        $_clicker.moneyup = parseInt(d.moneyup);
        $_clicker.msec = parseInt(d.msec);
        $_clicker.upcost = parseInt(d.upcost);
        $_clicker.catcost = parseInt(d.catcost);
        $_clicker.upown = parseInt(d.catadd);
        $_clicker.workercost = parseInt(d.workercost);
        $_clicker.upown = parseInt(d.workadd);
        $_clicker.catown = parseInt(d.catown);
        $_clicker.workerown = parseInt(d.workerown);
        $_clicker.upown = parseInt(d.upown);
        $_clicker.catadd = parseInt(d.catadd);
        $_clicker.workadd = parseInt(d.workadd);
        $_clicker.cboost = parseInt(d.cboost);
        $_clicker.wboost = parseInt(d.wboost);
        $_clicker.catmax = parseInt(d.catmax);
        $_clicker.workmax = parseInt(d.workmax);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const reset = () => {
    if (confirm("Are you sure you want to reset?") === true) {
      $_clicker = {
        money: 0,
        moneyup: 1,
        msec: 0,
        upcost: 15,
        catcost: 25,
        workercost: 250,
        upown: 0,
        catown: 0,
        workerown: 0,
        catadd: 1,
        workadd: 15,
        cboost: 1,
        wboost: 1,
        catmax: 0,
        workmax: 0,
      };
    }
  };
</script>


  <div class="btn-group btn-group-lg">
    <button class="btn btn-primary px-4 py-2" type="button" on:click={save}>Save</button>
    <button class="btn btn-primary px-4 py-2" type="button" on:click={load}>Load</button>
    <button class="btn btn-primary px-4 py-2" type="button" on:click={reset}>Reset</button
    >
  </div>


<style>
  /* nav {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem;
  } */

</style>
