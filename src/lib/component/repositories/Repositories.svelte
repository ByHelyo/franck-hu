<script lang="ts">
	import Repository from '$lib/component/repositories/Repository.svelte';
	import type { RepositoryInfo } from '$lib/type/repositories/repositories';

	export let repos: RepositoryInfo[];
</script>

<section>
	{#each repos as repo}
		<Repository
			name={repo.name}
			description={repo.description}
			stars={repo.stargazers_count}
			url={repo.html_url}
			language={repo.language}
		/>
	{/each}
</section>

<style>
	section {
		padding-inline: 16px;
		padding-block-end: 16px;

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}

	@media (max-width: 948px) {
		section {
			grid-template-columns: 1fr;
		}
	}
</style>
