<script lang="ts">
	import { onMount } from 'svelte';
	let activities: string | any[] = [];

	onMount(async () => {
		const res = await fetch('/api/strava/activities');
		activities = await res.json();
	});
</script>

<h1 class="text-2xl font-bold mb-4">Mes dernières activités Strava</h1>

{#if activities.length > 0}
	<ul class="space-y-4">
		{#each activities as act}
			<li class="bg-gray-100 p-4 rounded-xl shadow">
				<p class="text-lg font-semibold">{act.name}</p>
				<p>{(act.distance / 1000).toFixed(2)} km</p>
				<p>{new Date(act.start_date).toLocaleDateString()} — {act.type}</p>
			</li>
		{/each}
	</ul>
{:else}
	<p>Chargement des activités...</p>
{/if}
