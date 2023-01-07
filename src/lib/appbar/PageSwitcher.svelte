<script>
  import { onMount } from "svelte";
  // import themeSwitch from './PageSwitcher';
  console.log("PageSwitcher: initialized");
  onMount(() => {
    console.log("PageSwitcher: mounted");
  });
</script>



<details role="list" dir="rtl">
  <summary aria-haspopup="listbox" role="link" class="secondary">
    <slot name="label">Menu</slot>
  </summary>
  <ul role="listbox">
    <li><a href="#/">Start</a></li>
    <li><a href="#/upgrades"> Upgrades </a></li>
    <li><a href="#/settings"> Settings </a></li>
  </ul>
</details>
