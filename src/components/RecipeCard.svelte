<script>
  import { rightArrow } from "../../public/libs/icons";

  export let user,
    recipeName,
    recipeDescription,
    difficulty,
    image,
    servings,
    chefsChoice,
    i;
</script>

<style>
  section {
    position: relative;
    margin-right: 25px;
  }

  .to-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  section:last-of-type {
    padding-right: 80px;
  }

  img.chef-stamp {
    position: absolute;
    z-index: 10;

    width: 90px;
    height: 90px;

    right: 15px;
    top: -45px;
  }

  .stamp-down {
    top: 72px !important;
  }

  div.card {
    height: 450px;
    width: 240px;
    box-shadow: 0px 20px 30px #0000000a;

    user-select: none;
  }

  div.first-recipe-card {
    width: 370px;
    height: 560px;
  }

  section:last-of-type div.card {
    margin-right: 0;
  }

  div.image-container {
    width: 100%;
    height: 240px;

    position: relative;
  }

  div.first-recipe-image-cnt {
    height: 370px;
  }

  div.image-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  div.image-container .image-overlay {
    width: 100%;
    height: 100%;
    background-color: transparent;

    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div.image-container .image-overlay .servings {
    width: 72px;
    height: 72px;

    color: white;

    background-color: rgba(51, 51, 51, 0.3);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    text-align: center;
    text-transform: uppercase;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.first-recipe-servings-cnt {
    width: 110px !important;
    height: 110px !important ;
  }

  div.image-container .image-overlay .servings span.number {
    display: block;
    font-size: 35px;
  }

  .first-recipe-servings-text {
    font-size: 22px !important;
  }

  .first-recipe-servings-num {
    font-size: 50px !important;
  }

  div.image-container .image-overlay .servings p {
    font-size: 14px;
    letter-spacing: 0.14px;
  }

  div.image-container .image-overlay .read-more {
    width: 60px;
    height: 60px;
    background-color: var(--light-salmon);

    display: flex;
    justify-content: center;
    align-items: center;

    align-self: flex-end;
    cursor: pointer;
  }

  div.content-container {
    padding: 19px 25px;
  }

  div.content-container .difficulty-text {
    font-size: 14px;
    color: #767676;
    text-transform: uppercase;
    letter-spacing: 0.14px;
    opacity: 0.56;
  }

  div.content-container .recipe-name-text {
    font-size: 22px;
    color: var(--charcoal);

    text-transform: uppercase;

    margin: 14px 0;
  }

  div.content-container .recipe-description-text {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;

    color: #767676;
    letter-spacing: 0.15px;

    text-align: justify;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .first-recipe-recipe-text {
    -webkit-line-clamp: 3 !important;
  }

  .user-name {
    font-size: 14px;
    letter-spacing: 0.14px;
    color: var(--charcoal);

    text-transform: uppercase;
    text-align: right;

    margin-top: 16px;
  }
</style>

<section class:to-bottom={i == 2}>
  {#if chefsChoice}
    <img
      class="chef-stamp"
      src="./img/chef-stamp.png"
      alt="chefs-choics"
      class:stamp-down={i == 2}
    />
  {/if}
  <div class="card" class:first-recipe-card={i === 0}>
    <div class="image-container" class:first-recipe-image-cnt={i === 0}>
      <img src={image} alt="recipe" />

      <div class="image-overlay">
        <div class="servings" class:first-recipe-servings-cnt={i === 0}>
          <p class:first-recipe-servings-text={i === 0}>
            <span class="number" class:first-recipe-servings-num={i === 0}
              >{servings}</span
            >servings
          </p>
        </div>
        <div class="read-more">{@html rightArrow}</div>
      </div>
    </div>

    <div class="content-container">
      <p class="difficulty-text">{difficulty}</p>
      <p class="recipe-name-text">
        {recipeName}
      </p>
      <p
        class="recipe-description-text"
        class:first-recipe-recipe-text={i === 0}
      >
        {recipeDescription}
      </p>
    </div>
  </div>
  <p class="user-name">{user}</p>
</section>
