<script>
	import Repositories from '$lib/components/repositories/Repositories.svelte';

	export let data;
</script>

<svelte:head>
	<title>Franck Hu | Repositories</title>
</svelte:head>

<Repositories repos={data.repositories} />
