<script lang="ts">
	import Head from '$lib/component/head/Head.svelte';
	import Search from '$lib/component/repositories/Search.svelte';
	import Repositories from '$lib/component/repositories/Repositories.svelte';
	import type { RepositoryInfo } from '$lib/type/repositories/repositories';

	export let data;

	let repos: RepositoryInfo[] = data.repositories;

	let search = '';

	$: filtered_repos = repos.filter((repo) =>
		repo.name.toLowerCase().includes(search.toLowerCase())
	);
</script>

<Head title="Franck Hu | Repositories" />

<main>
	<h1>
		{filtered_repos.length}
		{#if filtered_repos.length <= 1}repository{:else}repositories{/if}
	</h1>

	<Search bind:search />

	<Repositories repos={filtered_repos} />
</main>

<style>
	main {
		padding-top: 256px;
	}

	h1 {
		text-align: center;
	}
</style>
