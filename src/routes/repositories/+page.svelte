<script>
	import Repositories from '$lib/components/repositories/Repositories.svelte';

	export let data;
</script>

<Repositories repos={data.repositories} />
