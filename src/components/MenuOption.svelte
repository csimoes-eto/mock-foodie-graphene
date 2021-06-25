<script>
  export let name, description, price;

  const priceFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
</script>

<style>
  div.option-container {
    padding-left: 30px;
  }
  div.option-container:not(:last-of-type) {
    margin-bottom: 50px;
  }
  p.name-text {
    letter-spacing: 0.14px;
  }
  p.description-text {
    font-family: Gill Sans;
    width: 192px;
    margin: 10px 0 12px 0;
    font-size: 15px;
  }
  p.price-text {
    border: 2px solid var(--light-salmon);
    display: inline-block;
    padding: 4px 10px;
  }
</style>

<div class="option-container">
  <p class="name-text">{name}</p>
  <p class="description-text">{description}</p>
  <p class="price-text">{priceFormatter.format(price)}</p>
</div>
