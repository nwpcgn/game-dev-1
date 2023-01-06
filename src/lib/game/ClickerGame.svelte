<script>
  import CgUpgrader from "./CgUpgrader.svelte";
  import CgCtrl from "./CgCtrl.svelte";
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

<div class="container-lg py-4">
  <header class="row gap-4">
    <div class="col-12 col-md-4 shadow-sm rounded">
      <div class="px-4 py-4 bg-white">
        <h4>Kapital</h4>
        <h2 class="display-1 fw-bold">{addcomma($_clicker.money)}</h2>
      </div>
    </div>
    <div class="col shadow-sm rounded">
      <table class="table mb-0">
        <thead>
          <tr>
            <th scope="col">Upgrades</th>
            <td scope="col">Units</td>
            <td scope="col">Cats</td>
            <td scope="col">Workers</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td scope="row">Anzahl</td>
            <td>{$_clicker.upown}</td>
            <td>{$_clicker.catown}</td>
            <td>{$_clicker.workerown}</td>
          </tr>

          <tr>
            <td scope="row">Preis</td>
            <td>{$_clicker.upcost}</td>
            <td>{$_clicker.catcost}</td>
            <td>{$_clicker.workercost}</td>
          </tr>

          <tr>
            <td scope="row">Flow</td>
            <td>{$_clicker.moneyup}/stk</td>
            <td>{$_clicker.catadd}/sec</td>
            <td>{$_clicker.workadd}/sec</td>
          </tr>
        </tbody>
      </table>
    </div>
  </header>
  <div class="py-2" />



  <div class="d-flex justify-content-center align-items-center p-4">
  
    <button class="clickItem" on:click={clicked}>
      <svg width="256" height="256" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm9.5 5.5h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-6.354-.354L6.793 8.5 5.146 6.854a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708z" clip-rule="evenodd"/>
      </svg>
    </button>
    
  </div>

 
  <CgUpgrader />
  <CgCtrl />
</div>

<style>
  .clickItem {
    color: var(--bs-dark);
    background-color: transparent;
    border-color: transparent;
    transition: color 150 ease-in;
  }
  .clickItem:active {
    color: var(--bs-primary);
  }
</style>
