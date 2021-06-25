<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import { currSection } from "../stores";

  const sections = ["header", "map", "menu", "recipes", "contact"];

  onMount(async () => await $currSection);
</script>

<style>
  div.side-nav-container {
    position: fixed;
    z-index: 100;

    height: 115px;
    width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    top: 50%;
    transform: translateY(-50%);
    left: 20px;

    user-select: none;
  }

  div.sec-num-wrapper {
    width: 15px;
    background-color: var(--charcoal);

    height: 2px;
    overflow: visible;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: flex-start;

    z-index: 11;

    transition: width 0.75s;
  }

  div.enlarge {
    width: 30px;
  }

  div.sec-num-wrapper p {
    font-size: 18px;
    letter-spacing: 0.18px;
    color: var(--charcoal);
  }
</style>

{#if $currSection != undefined}
  <div class="side-nav-container">
    {#each sections as section, i}
      <div class="sec-num-wrapper" class:enlarge={$currSection == section}>
        {#if $currSection == section}
          <p
            in:fly={{ y: -50, duration: 750 }}
            out:fly={{ y: 50, duration: 750 }}
          >
            {"0" + (i + 1)}
          </p>
        {/if}
      </div>
    {/each}
  </div>
{/if}
