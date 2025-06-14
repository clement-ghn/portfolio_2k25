<script lang="ts">
	import { onMount } from 'svelte';
	import Counter from '$lib/components/Counter/Counter.svelte';
	import ActivityMap from '$lib/components/Map/Map.svelte'; 

	let activities: any[] = [];
	let stats: Record<string, { distance: number; time: number }> = {};

	type SportType = 'Run' | 'Ride' | 'Swim';

	const typeTraduit: Record<SportType, string> = {
		Run: 'Course à pied',
		Ride: 'Vélo',
		Swim: 'Natation',
	};

	function traduireType(type: string): string {
		return typeTraduit[type as SportType] ?? type;
	}

	function formatDuration(seconds: number): string {
		if (!seconds || seconds < 0) return 'N/A';
		const h = Math.floor(seconds / 3600);
		const m = Math.floor((seconds % 3600) / 60);
		const s = seconds % 60;
		return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
	}

	function formatVitesse(type: string, avg_speed: number): string {
		if (!avg_speed) return 'N/A';
		switch (type) {
			case 'Run': {
				const totalSecondsPerKm = 1000 / avg_speed;
				let min = Math.floor(totalSecondsPerKm / 60);
				let sec = Math.round(totalSecondsPerKm % 60);

				if (sec === 60) {
				min += 1;
				sec = 0;
				}

				return `${min}:${sec < 10 ? '0' : ''}${sec} min/km`;
			}
			case 'Ride': {
				const kmh = avg_speed * 3.6;
				return `${kmh.toFixed(1)} km/h`;
			}
			case 'Swim': {
				const secondsPer100m = 100 / avg_speed;
				const totalSeconds = Math.round(secondsPer100m);
				const min = Math.floor(totalSeconds / 60);
				const sec = totalSeconds % 60;
				return `${min}:${sec < 10 ? '0' : ''}${sec} /100m`;
			}
			default:
				return `${(avg_speed * 3.6).toFixed(1)} km/h`;
		}
	}

	onMount(async () => {
		const res = await fetch('/api/strava/activities');
		activities = await res.json();

		stats = {};

		for (const act of activities) {
			let type = act.type;

			// Ignorer Transition et WeightTraining
			if (type === 'Workout' || type === 'WeightTraining') continue;

			// Fusionner VirtualRide avec Ride
			if (type === 'VirtualRide') type = 'Ride';

			if (!stats[type]) stats[type] = { distance: 0, time: 0 };
			stats[type].distance += act.distance;
			stats[type].time += act.elapsed_time;
		}
	});
</script>

<h1 class="text-2xl font-bold mb-6 text-center">Ma prépa</h1>

{#if Object.keys(stats).length > 0}
	<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
		{#each Object.entries(stats) as [type, data]}
			<div class="bg-white shadow p-4 rounded-xl text-center">
				<h3 class="text-lg font-semibold mb-2">{traduireType(type)}</h3>
				<p class="text-sm text-gray-600">Distance (km)</p>
				<Counter to={Math.round(data.distance / 1000)} />

				<p class="text-sm text-gray-600 mt-4">Temps (h)</p>
				<Counter to={Math.round(data.time / 3600)} />
			</div>
		{/each}
	</div>
{/if}

{#if activities.length > 0}
	<ul class="space-y-4 list-none">
		{#each activities as act}
			<li class="bg-gray-100 p-4 rounded-xl shadow">
				<div class="flex flex-col md:flex-row items-start">

					<!-- Infos à gauche -->
					<div class="flex-2/3 md:w-2/3 space-y-2">
						<p class="text-lg font-semibold">{act.name}</p>
						<p>📏 {(act.distance / 1000).toFixed(2)} km</p>
						<p>📅 {new Date(act.start_date).toLocaleDateString()} — {traduireType(act.type)}</p>
						<p>⏱️ Temps total : {formatDuration(act.elapsed_time)}</p>
						<p>⏱️ {formatVitesse(act.type, act.average_speed)}</p>
					</div>

					<!-- Carte à droite -->
					{#if act.map?.summary_polyline}
						<div class="w-full md:w-1/3 min-w-[200px]">
							<ActivityMap encodedPolyline={act.map.summary_polyline} />
						</div>
					{:else}
						<p class="text-sm text-gray-500">Pas de carte disponible</p>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
{:else}
	<p>Chargement des activités...</p>
{/if}
