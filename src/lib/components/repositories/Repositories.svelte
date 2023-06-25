<script lang="ts">
	import Repository from '$lib/components/repositories/Repository.svelte';
	import type { Repositories } from '$lib/types/repositories/repositories';

	export let repos: Repositories.Repository[];

	export let search: string;

	$: filtered_repos = repos.filter((repo) => repo.name.toLowerCase().includes(search));
</script>

<section>
	{#each filtered_repos as repo}
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
