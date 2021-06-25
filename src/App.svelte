<script>
  import NavBar from "./components/NavBar.svelte";
  import Header from "./components/Header.svelte";
  import Map from "./components/Map.svelte";
  import Menu from "./components/Menu.svelte";
  import Recipes from "./components/Recipes.svelte";
  import ContactForm from "./components/ContactForm.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <NavBar />
  <Header />

  <Map />
  <Menu />

  <Recipes />

  <ContactForm />
  <Footer />
</main>
