<script>
  import { onMount } from "svelte";

  export let title, options;

  let selects;

  onMount(() => {
    selects = document
      .querySelectorAll("select")
      .forEach((select) => (select.style.color = "rgba(118, 118, 118, 0.27)"));
  });
</script>

<style>
  input,
  select {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--charcoal);
    border-radius: 0;
    padding-left: 0;
    text-transform: capitalize;
  }

  input::placeholder {
    color: rgba(118, 118, 118, 0.27);
    font-size: 15px;
    letter-spacing: 0.15px;
  }

  label {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.14px;
  }

  input:active,
  select:active,
  input:focus,
  select:focus {
    outline: none;
  }
</style>

{#if !options}
  <label for={title}>{title}</label>
  <input type="text" placeholder={title} id={title} />
{:else}
  <label for={title}>{title}</label>

  <select
    name={title}
    id={title}
    on:input={(e) => (e.target.style.color = "initial")}
  >
    <option selected disabled>Select</option>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
{/if}
