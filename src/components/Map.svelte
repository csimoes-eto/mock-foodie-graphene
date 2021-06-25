<script>
  import { onMount } from "svelte";

  import { checkIfIsInViewport } from "../helpers";
  import mapMarker from "../../public/icons/mapMarker";

  let mapContainer;

  onMount(() => {
    let mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(51.51099971013418, -0.11434118790071954),
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [{ lightness: "-100" }, { color: "#ffdac9" }],
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#ffcab1" }],
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffcab1" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ lightness: 100 }, { visibility: "simplified" }],
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [{ visibility: "on" }, { lightness: 700 }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#92e1dd" }],
        },
      ],
      disableDefaultUI: true,
    };

    let map = new google.maps.Map(mapContainer, mapOptions);

    const svgMarker = {
      path: mapMarker,
      fillColor: "var(--charcoal)",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 0.75,

      //   anchor: new google.maps.Point(0, 75),
    };

    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        51.512501969359235,
        -0.12697397022919504
      ),
      icon: svgMarker,
      map: map,
    });
  });
</script>

<style>
  .wrapper {
    position: relative;
    z-index: 20;
  }

  .map {
    width: 100vw;
    height: 500px;
  }

  .map-overlay {
    z-index: 100;
    position: absolute;
    top: 50px;
    left: 120px;
    z-index: 99;
  }

  .map-overlay h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 62px;

    z-index: 100;
    position: relative;
    user-select: none;
  }

  .adress-box {
    background-color: white;
    width: 220px;
    height: 106px;

    display: flex;
    align-items: center;

    box-sizing: border-box;
    padding: 45px 30px 16px 18px;

    position: relative;
    bottom: 45px;
  }

  .adress-box p {
    font-size: 15px;
    letter-spacing: 0.15px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  :global(.gmnoprint),
  :global(img[src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5_hdpi.png"]),
  :global(.gm-style-cc) {
    display: none !important;
  }
</style>

<div class="wrapper" use:checkIfIsInViewport data-section="map" id="location">
  <div class="map" bind:this={mapContainer} />

  <div class="map-overlay">
    <h1>location</h1>
    <div class="adress-box">
      <p>12 Upper St. Martin’s Lane WC2H 9FB, London</p>
    </div>
  </div>
</div>
