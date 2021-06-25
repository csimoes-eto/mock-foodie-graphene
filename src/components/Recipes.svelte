<script>
  import RecipesHeader from "./RecipesHeader.svelte";
  import RecipeCard from "./RecipeCard.svelte";
  import { checkIfIsInViewport } from "../helpers";
  import { recipes } from "../../public/libs/recipes";
  import { next, back } from "../../public/libs/icons";
  import { onMount } from "svelte";

  let recipesContainer, scrollableWidth, scrollX;

  onMount(() => {
    scrollX = recipesContainer.scrollLeft;
    scrollableWidth =
      recipesContainer.scrollWidth - recipesContainer.clientWidth;
  });
</script>

<style>
  div.recipes-section-wrapper {
    position: relative;
    z-index: 20;

    background-color: white;

    padding-top: 100px;

    overflow: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  div.recipes-section-wrapper::-webkit-scrollbar {
    display: none;
  }

  div.recipes-container {
    display: flex;
    margin-left: 10%;
    height: 600px;
  }

  div.arrows-container {
    width: 120px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }

  div.arrow-cnt {
    display: flex;
    cursor: pointer;
  }

  .reduce-tone {
    opacity: 0.27;
  }
</style>

<div
  class="recipes-section-wrapper"
  use:checkIfIsInViewport
  data-section="recipes"
  on:scroll={(e) => (scrollX = e.target.scrollLeft)}
  bind:this={recipesContainer}
  id="recipes"
>
  <RecipesHeader />

  <div class="recipes-container">
    {#each recipes as recipe, i}
      <RecipeCard {...recipe} {i} />
    {/each}
  </div>

  <div
    class="arrows-container"
    style="transform: translateX(calc(900% + {scrollX}px));"
  >
    <div
      class="arrow-cnt to-left"
      class:reduce-tone={scrollX == 0}
      on:click={() =>
        recipesContainer.scrollTo({
          left: scrollX - 270,
          behavior: "smooth",
        })}
    >
      {@html back}
    </div>
    <div
      class="arrow-cnt to-right"
      class:reduce-tone={scrollX == scrollableWidth}
      on:click={() =>
        recipesContainer.scrollTo({
          left: scrollX + 270,
          behavior: "smooth",
        })}
    >
      {@html next}
    </div>
  </div>
</div>
