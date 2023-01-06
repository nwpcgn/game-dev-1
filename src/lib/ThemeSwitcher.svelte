<script>
  import { onMount } from "svelte";
  import themeSwitch from './themeSwitcher';
  console.log("ThemeSwitcher: initialized");
  onMount(() => {
    console.log("ThemeSwitcher: mounted");
    themeSwitch.init();
  });
</script>

<details role="list" dir="rtl"> 
    <summary aria-haspopup="listbox" role="link" class="secondary">
      <slot name="label">Theme</slot>
    </summary>                         
    <ul role="listbox"> 
        <li> <a href="#" data-theme-switcher="auto">Auto</a> 
        </li>                             
        <li> <a href="#" data-theme-switcher="light">Light</a> 
        </li>                             
        <li> <a href="#" data-theme-switcher="dark">Dark</a> 
        </li>                             
    </ul>                         
</details> 

