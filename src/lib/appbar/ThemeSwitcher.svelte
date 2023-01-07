<script>
  import { onMount } from "svelte";
  import themeSwitch from './themeSwitcher';
  export let role = "button";
  console.log("ThemeSwitcher: initialized");
  onMount(() => {
    console.log("ThemeSwitcher: mounted");
    themeSwitch.init();
  });
  let isOpen;
</script>

<details bind:open={isOpen} role="list" dir="rtl"> 
    <summary aria-haspopup="listbox" {role} class="secondary">
      <slot name="label">Theme</slot>
    </summary>                         
    <ul role="listbox" on:click={() => (isOpen = false)}> 
        <li> <a href="#" data-theme-switcher="auto">Auto</a> 
        </li>                             
        <li> <a href="#" data-theme-switcher="light">Light</a> 
        </li>                             
        <li> <a href="#" data-theme-switcher="dark">Dark</a> 
        </li>                             
    </ul>                         
</details> 

<style>
  ul {
    text-align: center;
  }
</style>