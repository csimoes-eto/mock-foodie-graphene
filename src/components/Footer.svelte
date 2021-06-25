<script>
  import {
    fb_icn,
    twitter_icn,
    inta_icn,
    linkedIn_icn,
    dribbble_icn,
  } from "../../public/libs/icons";

  let social = [fb_icn, twitter_icn, inta_icn, linkedIn_icn, dribbble_icn];
</script>

<style>
  footer {
    height: 323px;
    position: relative;
    z-index: 20;
    background-color: var(--charcoal);

    padding: 64px 136px 0 136px;
  }

  div.top-cnt {
    display: flex;

    justify-content: space-between;
  }

  div.logo-cnt {
    color: #fff;
    text-transform: uppercase;
    text-align: right;

    transform: translateY(-8px);
  }

  div.logo-cnt h1 {
    font-size: 35px;
    line-height: 45px;
  }

  span.bigger {
    font-size: 62px;
    display: block;
  }

  div.col-container {
    width: 620px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  p.col-title {
    font-size: 14px;
    letter-spacing: 0.14px;
    color: var(--light-salmon);

    text-transform: uppercase;

    user-select: none;
  }

  div.sub-links {
    height: 113px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    cursor: context-menu;
  }

  .grey-gill {
    color: #767676;
    font-size: 13px;
    letter-spacing: 0.13px;

    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  div.bottom-cnt {
    margin-top: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div.social {
    width: 229px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :global(div.social svg) {
    cursor: pointer;
  }

  i.icn-cnt {
    display: flex;
    align-content: center;
  }

  :global(i.icn-cnt svg) {
    fill: white;
  }
</style>

<footer>
  <div class="top-cnt">
    <div class="col-container">
      {#each new Array(5) as item, i}
        <div class="content-col">
          <p class="col-title">
            section {i + 1}
          </p>
          <div class="sub-links grey-gill">
            {#each new Array(4) as item}
              <p>Subsection</p>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="logo-cnt">
      <h1>this is the<span class="bigger">logo</span></h1>
    </div>
  </div>
  <div class="bottom-cnt">
    <p class="grey-gill">
      {new Date().getFullYear()}. Company. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor.
    </p>

    <div class="social">
      {#each social as icn}
        <i class="icn-cnt">
          {@html icn}
        </i>
      {/each}
    </div>
  </div>
</footer>
