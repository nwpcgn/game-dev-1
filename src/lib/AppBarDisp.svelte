<script>
	import SvgMoney from './game/SvgMoney.svelte';
  import { _clicker } from "./game/store";
  const addcomma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  import { fade } from "svelte/transition";
  let visible = false;

  function typewriter(node, { speed = 2 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t) => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
</script>

<ul>
  <li>
    <SvgMoney style="--fs: 20px;" />
	
  </li>
  <li style="position: relative;">
    {#key $_clicker.money}
      <strong style="position: absolute;" transition:typewriter
        >{addcomma($_clicker.money)}</strong
      >
    {/key}
    <strong style="opacity: 0; position: absolute;"
      >{addcomma($_clicker.money)}</strong
    >
  </li>
</ul>
