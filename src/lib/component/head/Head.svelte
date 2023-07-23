<script lang="ts">
	export let title: string;

	let visible = true;

	function handleVisibilityChange() {
		visible = document.visibilityState !== 'hidden';
	}
</script>

<svelte:document on:visibilitychange={handleVisibilityChange} />

<svelte:head>
	{#if visible}
		<title>{title}</title>
	{:else}
		<title>Please come back :)</title>
	{/if}
</svelte:head>
