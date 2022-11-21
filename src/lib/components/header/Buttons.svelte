<script>
	import ButtonImg from '$lib/components/utils/ButtonImg.svelte';

	export let open;
</script>

<div>
	<ButtonImg src="/misc/menu.svg" on:click={() => (open = !open)} />
</div>
