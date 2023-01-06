<script>
  import Sidebar from "./Sidebar.svelte";
  import Upgrader from "./lib/game/Upgrader.svelte";
  import AppBar from "./lib/AppBar.svelte";
  import Canvas from "./lib/Canvas.svelte";
  // import Renderless from "./lib/Renderless.svelte";
  import { onMount } from "svelte";
  import TabCats from "./lib/game/TabCats.svelte";
  import TabUnit from "./lib/game/TabUnit.svelte";
  import Panel from "./lib/Panel.svelte";
  import TabWork from "./lib/game/TabWork.svelte";
  console.log("App: initialized");
  onMount(() => {
    console.log("App: mounted");
  });
</script>

<!-- <Renderless id="Resizer" />  -->

<svelte:head>
  <title>nwp-game</title>
</svelte:head>

<AppBar />
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
