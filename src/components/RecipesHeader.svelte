<style>
  div.section-header {
    width: 80%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    user-select: none;

    margin-bottom: 60px;
  }

  div.recipes-title {
    text-transform: uppercase;
    display: inline-block;
  }

  div.recipes-title h1 {
    font-size: 35px;
    line-height: 45px;
  }

  .bigger {
    display: block;
    font-size: 62px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    width: fit-content;
  }

  .bigger span {
    position: relative;
    z-index: 6;
  }

  div.color-stroke {
    width: 196px;
    height: 5px;
    background-color: var(--light-salmon);
    position: relative;
    display: inline-block;
    transform: translateX(-176px);
    z-index: 5;
  }

  .pink-btn {
    background-color: var(--light-salmon);
    width: fit-content;
    cursor: pointer;
    margin-top: 5px;
  }

  .pink-btn p {
    text-transform: uppercase;
    padding: 5px 10px;
    font-size: 18px;
  }

  div.send-recipes-cta > p {
    font-size: 35px;
    text-transform: uppercase;
  }

  div.send-recipes-cta .pink-btn {
    float: right;
  }
</style>

<div class="section-header">
  <div class="recipes-title">
    <h1>
      popular
      <span class="bigger"
        ><span>recipes</span>
        <div class="color-stroke" /></span
      >
    </h1>
    <div class="pink-btn">
      <p>see all</p>
    </div>
  </div>

  <div class="send-recipes-cta">
    <p>do you want to share your own recipe?</p>
    <div class="pink-btn">
      <p>send it now</p>
    </div>
  </div>
</div>
