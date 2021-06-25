<script>
  import { onMount } from "svelte";

  import MenuOption from "./MenuOption.svelte";
  import menu from "../../public/libs/menu";

  import { checkIfIsInViewport } from "../helpers";

  let y, menuELe, offsetTopMenu;

  onMount(() => {
    offsetTopMenu = menuELe.offsetTop;
  });

  const offsetTranslate = [250, -80, 150, -100];
</script>

<style>
  div.menu-container {
    height: 100vh;
    width: 100%;
    background-color: var(--menu-bg);
    color: var(--charcoal);
    position: relative;
  }

  div.title-wrapper {
    width: 236px;
    background-color: var(--light-salmon);

    height: 5px;
    overflow: visible;

    margin: 0 auto;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    top: 100px;

    z-index: 11;
  }

  h1 {
    font-size: 62px;
    text-transform: uppercase;
    user-select: none;
  }

  div.know-more-container {
    background-color: var(--light-salmon);
    width: fit-content;
    cursor: pointer;

    position: relative;
    top: 135px;
    margin: 0 auto;

    z-index: 11;
  }

  div.know-more-container p {
    text-transform: uppercase;
    padding: 5px 10px;
    font-size: 18px;
  }

  div.menu-grid {
    position: absolute;
    top: 0;
    height: 100%;
    width: 80%;
    max-width: 1070px;

    margin: 0 auto;

    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  div.category-col {
    width: calc(100% / 4);
    background-color: var(--menu-bg);
    position: relative;

    display: flex;
  }

  div.category-col h1 {
    margin-bottom: 55px;
    line-height: 52px;
    position: relative;
    right: 8px;
  }

  div.menu-content-wrap {
    width: 100%;
  }

  div.menu-content-wrap.odd {
    align-self: flex-end;

    transition-duration: 0.1s;
  }

  div.menu-content-wrap.even {
    align-self: flex-start;
  }

  div.category-col:not(:last-of-type) {
    border-right: 1px solid #cecece;
  }
</style>

<svelte:window bind:scrollY={y} />

<div
  class="menu-container"
  bind:this={menuELe}
  use:checkIfIsInViewport
  data-section="menu"
  id="ourmenu"
>
  <div class="title-wrapper">
    <h1>our menu</h1>
  </div>
  <div class="know-more-container">
    <p>know more</p>
  </div>

  <div class="menu-grid">
    {#each menu as { category, options, zi }, i}
      <div class="category-col" style="z-index: {zi};">
        <div
          class="menu-content-wrap"
          class:even={(i + 1) % 2 == 0}
          class:odd={(i + 1) % 2 != 0}
          style="transform: translateY({(i + 1) % 2 == 0
            ? `${-offsetTopMenu + y + 250 + offsetTranslate[i]}px`
            : `${offsetTopMenu - y - 250 + offsetTranslate[i]}px`});"
        >
          <h1>{category}</h1>
          {#each options as option}
            <MenuOption {...option} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
