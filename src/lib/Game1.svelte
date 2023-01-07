<script>
  import Sidebar from "./Sidebar.svelte";
  import Upgrader from "./game/Upgrader.svelte";
  // import AppBar from "./appbar/AppBar.svelte";
  import Canvas from "./Canvas.svelte";
  // import Renderless from "./lib/Renderless.svelte";
  import { onMount } from "svelte";
  import TabCats from "./game/TabCats.svelte";
  import TabUnit from "./game/TabUnit.svelte";
  import Panel from "./Panel.svelte";
  import TabWork from "./game/TabWork.svelte";
  console.log("Game-1: initialized");
  onMount(() => {
    console.log("Game-1: mounted");
  });
</script>

<!-- <Renderless id="Resizer" />  -->

<svelte:head>
  <title>nwp-game</title>
</svelte:head>

<!-- <AppBar /> -->


<Canvas />
<Sidebar>
  <Upgrader />
</Sidebar>
<Sidebar right style="--w: 250px; --t: 200px;">
  <Panel>
    <TabUnit />
  </Panel>
  <Panel>
    <TabCats />
  </Panel>
  <Panel>
    <TabWork />
  </Panel>
</Sidebar>
