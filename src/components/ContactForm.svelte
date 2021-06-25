<script>
  import ContactFormInput from "./ContactFormInput.svelte";
  import { checkIfIsInViewport } from "../helpers";

  const leftQuestions = [
    { title: "name" },
    { title: "phone" },
    {
      title: "experience",
      options: ["food", "tour", "winery"],
    },
  ];

  const rightQuestions = [
    { title: "surname" },
    { title: "email adress" },
    {
      title: "where did you hear about us?",
      options: ["here", "there", "everywhere"],
    },
  ];
</script>

<style>
  div.contact-form-container {
    height: 462px;
    background-image: url("/img/detail02.png");
    background-repeat: no-repeat;
    background-position: 72% 6px;

    background-color: var(--light-salmon);

    position: relative;
    z-index: 20;

    padding: 0 128px;
  }

  div.flex {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  div.contact-title {
    text-transform: uppercase;
    display: inline-block;

    position: relative;

    margin-top: 83px;
  }

  div.contact-title h1 {
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
    height: 8px;
    background-color: white;
    position: relative;
    display: inline-block;
    transform: translateX(-176px);
    z-index: 5;
  }

  div.text-content {
    width: 322px;
    height: 169px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 15px;
    letter-spacing: 0.15px;
    color: #767676;

    text-align: justify;

    line-height: 20px;
  }

  div.text-content p:first-of-type {
    margin: 20px 0;
  }

  div.form-container {
    width: 525px;
    height: 222px;
    margin-top: 119px;
    justify-content: space-between;

    display: flex;
  }

  div.form-half {
    height: 100%;
    width: 48%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div.blk-btn {
    width: 64px;
    height: 30px;
    background-color: var(--charcoal);
    float: right;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  div.blk-btn p {
    text-transform: uppercase;
    color: var(--light-salmon);
    font-size: 18px;
    letter-spacing: 0.18px;
  }
</style>

<div
  class="contact-form-container"
  use:checkIfIsInViewport
  data-section="contact"
  id="contact"
>
  <div class="flex">
    <div>
      <div class="contact-title">
        <h1>
          collaborate
          <span class="bigger"
            ><span>with us</span>
            <div class="color-stroke" /></span
          >
        </h1>
      </div>
      <div class="text-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
      </div>
    </div>
    <div class="form-container">
      <div class="form-half">
        {#each leftQuestions as q}
          <ContactFormInput {...q} />
        {/each}
      </div>
      <div class="form-half">
        {#each rightQuestions as q}
          <ContactFormInput {...q} />
        {/each}
      </div>
    </div>
  </div>
  <div class="blk-btn"><p>send</p></div>
</div>
