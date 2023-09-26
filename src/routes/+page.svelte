<script lang="ts">
	import Head from '$lib/component/head/Head.svelte';
	import Profile from '$lib/component/home/Profile.svelte';
	import Description from '$lib/component/home/Description.svelte';
</script>

<Head title="Franck Hu | Home" />

<main>
	<Profile />

	<Description />
</main>

<style>
	main {
		max-width: 1400px;
		margin: auto;
		display: flex;
		gap: 64px;
		padding: 256px 16px 16px;
	}

	@media (max-width: 1536px) {
		main {
			flex-direction: column;
		}
	}

	@media (max-width: 640px) {
		main {
			justify-content: center;
			align-items: center;
		}
	}
</style>
