<script>
  import { _clicker } from "./store";
</script>

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
