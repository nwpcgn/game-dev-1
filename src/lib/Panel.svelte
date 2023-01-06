<div {...$$restProps}>
  <slot><!-- optional fallback --></slot>
</div>

<style>
  div {
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    color: var(--color);
    box-shadow: var(--card-box-shadow);
  }
</style>
