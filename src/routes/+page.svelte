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
		display: flex;
		justify-content: space-around;
		padding-top: 256px;
	}
</style>
