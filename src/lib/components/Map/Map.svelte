<script lang="ts">
  import { onMount } from 'svelte';
  import * as L from 'leaflet';
  import polyline from '@mapbox/polyline';

  export let encodedPolyline: string;

  let mapContainer: HTMLElement;

  import iconUrl from 'leaflet/dist/images/marker-icon.png';
  import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
  import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

  L.Icon.Default.mergeOptions({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
  });

  onMount(() => {
    const map = L.map(mapContainer).setView([0, 0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const latlngs = polyline.decode(encodedPolyline) as L.LatLngTuple[];
    const polylineLayer = L.polyline(latlngs, { color: 'red', weight: 4 }).addTo(map);

    map.fitBounds(polylineLayer.getBounds());
  });
</script>

<style>
  .leaflet-container {
    width: 100%;
    height: 300px;
    border-radius: 0.75rem;
  }
</style>

<div bind:this={mapContainer} class="leaflet-container shadow" />
