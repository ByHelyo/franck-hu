<script lang="ts">
	import AnchorImg from '$lib/component/utils/AnchorImg.svelte';
	import type { Home } from '$lib/type/home/Links';

	let links: Home.LinkSocial[] = [
		{
			name: 'GitHub',
			href: 'https://github.com/ByHelyo',
			src: 'logo/github.svg'
		},
		{
			name: 'Mail',
			href: 'mailto:byfranckhu@gmail.com',
			src: 'logo/mail.svg'
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/franck-hu',
			src: 'logo/linkedin.svg'
		}
	];
</script>

<ul>
	{#each links as link}
		<li>
			<AnchorImg href={link.href} src={link.src} name={link.name} />
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;

		list-style: none;
		display: flex;
		justify-content: center;
		gap: 16px;
	}
</style>
