<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a href={data} download>
				<Chip size={'1.25em'}>Télécharger</Chip>
			</a>
		{:else}
			<Chip>Ooops! Pas encore de CV.</Chip>
		{/if}
	</div>
</CommonPage>
<footer class="text-center text-sm text-[var(--tertiary-text)] mt-10 p-4">
	<p>
		Template par <a href="https://github.com/RiadhAdrani" target="_blank" rel="noreferrer" class="text-[var(--accent-text)] underline">
			Riadh Adrani
		</a>
	</p>
</footer>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
