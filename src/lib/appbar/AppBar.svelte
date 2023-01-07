<script>
  import AppBarNav from "./AppBarNav.svelte";

  // import PageSwitcher from "./PageSwitcher.svelte";
  import AppBarDisp from "./AppBarDisp.svelte";
  // import AppStoreBar from "./game/AppStoreBar.svelte";
  // import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import { _clicker } from "../game/store";
  const addcomma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  import { onMount } from "svelte";
  export let brand = "nwp-studio";
  console.log("Navbar: initialized");
  onMount(() => {
    console.log("Navbar: mounted");
  });
</script>

<nav class="app-bar container-fluid">
  <ul>
    <li>
      <a href="#/" class="contrast">
        <strong>{brand}</strong>
      </a>
    </li>
  </ul>
  <AppBarDisp />

  <AppBarNav />
</nav>



