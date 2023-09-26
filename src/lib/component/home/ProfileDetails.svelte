<script lang="ts">
	import Link from '$lib/component/home/Link.svelte';
	import type { SocialInfo } from '$lib/type/home/social';

	let links: SocialInfo[] = [
		{
			name: 'Mail',
			href: 'mailto:byfranckhu@outlook.com',
			src: 'logo/mail.svg'
		},
		{
			name: 'GitHub',
			href: 'https://github.com/ByHelyo',
			src: 'logo/github.svg'
		},

		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/franck-hu',
			src: 'logo/linkedin.svg'
		}
	];
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

		.actions {
			flex-direction: column;
		}
	}
</style>
