<script lang="ts">
	import Link from '$lib/component/home/Link.svelte';
	import { links } from '$lib/const/link';
</script>

<div class="container">
	<h1>Franck Hu</h1>
	<div class="description">Computer Science student</div>
	<div class="actions">
		{#each links as link}
			<Link name={link.name} href={link.href} src={link.src} />
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		gap: 16px;
		flex-direction: column;
	}

	h1 {
		padding-top: 64px;
		font-size: 48px;
		margin: 0;
	}

	.description {
		font-size: 20px;
	}

	.actions {
		display: flex;
		gap: 16px;
	}

	@media (max-width: 640px) {
		.container {
			align-items: center;
		}
	}

	@media (max-width: 480px) {
		.actions {
			flex-direction: column;
		}
	}
</style>
