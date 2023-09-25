<script lang="ts">
	import Link from '$lib/component/home/Link.svelte';
	import type { Home } from '$lib/type/home/Links';

	let links: Home.LinkSocial[] = [
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
	<img src="me.jpg" alt="" />

	<div class="details">
		<h1>Franck Hu</h1>
		<div class="description">Computer Science student</div>
		<div class="actions">
			{#each links as link}
				<Link name={link.name} href={link.href} src={link.src} />
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		gap: 32px;
	}

	img {
		width: 200px;
		height: 200px;

		margin: auto;
		display: block;
		border: 1px solid #ffffff;
		border-radius: 50%;
	}

	h1 {
		padding-top: 32px;
		font-size: 48px;
		margin: 0;
	}

	.details {
		display: flex;
		gap: 16px;
		flex-direction: column;
	}

	.description {
		font-size: 20px;
	}

	.actions {
		display: flex;
		gap: 16px;
	}
</style>
