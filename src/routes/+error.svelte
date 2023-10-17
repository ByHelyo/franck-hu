<script lang="ts">
	import Status from '$lib/component/error/Status.svelte';
</script>

<svelte:head>
	<title>An error occurred :,(</title>
</svelte:head>

<div class="container">
	<Status />
</div>

<style>
	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
