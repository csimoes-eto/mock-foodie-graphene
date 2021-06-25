<script>
  const navElements1 = [
    { href: "#about", section: "About" },
    { href: "#location", section: "Location" },
    { href: "#ourmenu", section: "Our Menu" },
    { href: "#recipes", section: "Recipes" },
  ];
  const navElements2 = [
    { href: "#contact", section: "Contact" },
    { href: "#", section: "Login" },
  ];
</script>

<style>
  div.navbar-container {
    width: 100vw;
    height: 50px;
    background-color: transparent;
    color: var(--charcoal);
    white-space: nowrap;
    text-transform: uppercase;
    justify-content: space-between;

    position: fixed;

    z-index: 51;
  }

  .navbar-container,
  .left-elements,
  .ele1-container,
  .ele2-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .left-elements {
    width: 40%;
    margin-left: 35px;

    justify-content: space-between;
  }

  .ele1-container {
    width: 80%;
    justify-content: space-between;
  }

  .ele1-container a {
    letter-spacing: 0.18px;
  }

  .right-elements {
    width: 10%;
    margin-right: 18px;
  }

  .ele2-container {
    justify-content: space-between;
  }

  h2 {
    font-size: 28px;
  }
</style>

<div class="navbar-container">
  <div class="left-elements">
    <h2>LOGO</h2>
    <div class="ele1-container">
      {#each navElements1 as navEle}
        <a href={navEle.href}>{navEle.section}</a>
      {/each}
    </div>
  </div>

  <div class="right-elements">
    <div class="ele2-container">
      {#each navElements2 as navEle}
        <a href={navEle.href}>{navEle.section}</a>
      {/each}
    </div>
  </div>
</div>
