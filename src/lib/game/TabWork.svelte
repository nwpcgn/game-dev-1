<script>
  import { _clicker } from "./store";
  import SvgCost from "./SvgCost.svelte";
  import SvgRaise from "./SvgRaise.svelte";
  import SvgStep from "./SvgStep.svelte";
  // import SvgMoney from "./SvgMoney.svelte";
  export let label = "Workers";
  const addcomma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
</script>

<table role="grid">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{label} ({$_clicker.workerown})</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" data-pg-collapsed>
        <SvgRaise />
      </th>
      <td>{addcomma($_clicker.workadd)}/sec</td>
    </tr>
    <tr>
      <th scope="row" data-pg-collapsed>
        <SvgCost />
      </th>
      <td>{addcomma($_clicker.workercost)} $</td>
    </tr>

<!--     <tr>
      <th scope="row" data-pg-collapsed>
        <SvgStep />
      </th>
      <td>{addcomma($_clicker.workerown)}</td>
    </tr> -->
  </tbody>
</table>
