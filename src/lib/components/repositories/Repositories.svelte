<script>
	import Repository from '$lib/components/repositories/Repository.svelte';

	export let repos;
</script>

<section>
	<h1>Repositories</h1>

	<div>
		{#each repos as repo}
			<Repository
				name={repo.name}
				description={repo.description}
				stars={repo.stargazers_count}
				url={repo.html_url}
				language={repo.language}
			/>
		{/each}
	</div>
</section>

<style>
	div {
		padding-inline: 16px;

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}

	@media (max-width: 948px) {
		div {
			grid-template-columns: 1fr;
		}
	}

	h1 {
		text-align: center;
	}
</style>
