<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>An error has occured :,(</title>
</svelte:head>

<main>
	<div class="status">{$page.status}</div>
	<div class="status">
		{$page.error?.message}
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 32px;
	}

	.status {
		font-weight: bold;
		font-size: 64px;
		text-align: center;
	}
</style>
