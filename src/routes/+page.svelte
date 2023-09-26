<script lang="ts">
	import Head from '$lib/component/head/Head.svelte';
	import Profile from '$lib/component/home/Profile.svelte';
</script>

<Head title="Franck Hu | Home" />

<main>
	<Profile />
</main>

<style>
	main {
		max-width: 1400px;
		margin: auto;
		display: flex;
		gap: 128px;
		padding: 256px 16px 16px;
	}

	@media (max-width: 640px) {
		main {
			justify-content: center;
		}
	}
</style>
