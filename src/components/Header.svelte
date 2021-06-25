<script>
  import SideNav from "../components/SideNav.svelte";

  import { checkIfIsInViewport } from "../helpers";
</script>

<style>
  div.header-container {
    width: 100vw;
    height: 100vh;

    background-image: url("/img/headerImg.png");
    background-color: var(--light-salmon);

    background-repeat: no-repeat;
    background-position: center top;

    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 50;
  }

  div.text-container {
    text-align: center;

    user-select: none;
  }

  h1,
  h2 {
    text-transform: uppercase;
    color: white;
  }

  h1 {
    font-size: 82px;
    line-height: 95px;
  }

  h2 {
    font-size: 35px;
  }

  .bigger {
    display: block;
    font-size: 115px;
  }

  div.position-image {
    position: absolute;

    height: 100%;
    width: 866px;
  }

  img {
    position: relative;
    width: 125px;
    height: 125px;
    top: 115px;
  }

  .req-info-text-container {
    background-color: white;
    color: var(--charcoal);
    padding: 5px 10px;
    width: fit-content;

    position: fixed;
    right: -15px;
    transform: rotate(-90deg);

    user-select: none;
    cursor: pointer;

    z-index: 100;
  }

  p {
    font-size: 18px;
    letter-spacing: 0.18px;
    text-transform: uppercase;
  }
</style>

<div
  class="header-container"
  use:checkIfIsInViewport
  data-section="header"
  id="about"
>
  <SideNav />

  <div class="text-container">
    <h1>the best foodie<span class="bigger">experience</span></h1>
    <h2>now in london</h2>
  </div>
  <div class="position-image">
    <img src="/img/stamp.png" alt="logo stamp" />
  </div>
  <div class="req-info-text-container">
    <p>request info</p>
  </div>
</div>
