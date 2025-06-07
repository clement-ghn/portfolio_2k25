<script lang="ts">
	import { onMount } from 'svelte';
	export let to: number;
	export let duration = 1500;

	let count = 0;

	onMount(() => {
		const start = performance.now();
		function animate(now: number) {
			const elapsed = now - start;
			const progress = Math.min(elapsed / duration, 1);
			count = Math.floor(to * progress);
			if (progress < 1) requestAnimationFrame(animate);
			else count = to;
		}
		requestAnimationFrame(animate);
	});
</script>

<span class="text-3xl font-bold text-black-700">{count}</span>
