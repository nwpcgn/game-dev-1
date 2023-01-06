<script>
	import SvgCost from './SvgCost.svelte';
  import SvgRaise from "./SvgRaise.svelte";
  import SvgMoney from "./SvgMoney.svelte";
  import { _clicker } from "./store";
  export let label = "Unit";
  const addcomma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
</script>

<table role="grid">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{label} ({$_clicker.upown})</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <SvgMoney />
      </th>
      <td>{addcomma($_clicker.money)} $</td>
    </tr>
    <tr>
      <th scope="row">
        <SvgRaise />
      </th>
      <td>{addcomma($_clicker.moneyup)}/stk</td>
    </tr>
     <tr>
      <th scope="row">
        <SvgCost />
      </th>
      <td>{addcomma($_clicker.upcost)} $</td>
    </tr>
  </tbody>
</table>
