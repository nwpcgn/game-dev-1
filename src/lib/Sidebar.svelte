<script>
  export let open = false;
  export let right = false;
</script>

<aside class="aside" class:left={!right} class:right={right} class:open {...$$restProps}>
  <slot><!-- optional fallback --></slot>
</aside>

<style>
  .aside {
    padding: 0;
    width: 100%;
    max-width: var(--w, 250px);
    position: fixed;
    top: 3rem;
    bottom: 0;
    transition: transform 400ms ease-in-out 400ms;
    box-shadow: var(--card-box-shadow);
  }
  .aside.right {
    padding: 1rem 0.25rem;
    right: 0;
    z-index: var(--z, 42);
    transform: translateX(var(--t, 200px));
  }
  .aside.left {
    padding: 1rem 0.25rem;
    left: 0;
    z-index: var(--z, 40);
    transform: translateX(var(--t, -200px));
  }
  .aside.open,
  .aside:hover {
    transform: translateX(0);
  }
  @media (min-width:992px) {
    .aside.left,
    .aside.right,
    .aside.open {
      transform: translateX(0);
    }
  }

</style>
