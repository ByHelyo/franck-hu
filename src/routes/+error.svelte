<script lang="ts">
	import Status from '$lib/component/error/Status.svelte';
	import Head from '$lib/component/head/Head.svelte';
</script>

<Head title="An error occured :,(" />

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
