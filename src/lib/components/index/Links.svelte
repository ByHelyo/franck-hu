<script>
	import AnchorImg from '$lib/components/utils/AnchorImg.svelte';

	let links = [
		{
			name: 'GitHub',
			href: 'https://github.com/ByHelyo',
			src: 'logos/github.svg'
		},
		{
			name: 'Mail',
			href: 'mailto:byfranckhu@gmail.com',
			src: 'logos/mail.svg'
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/franck-hu',
			src: 'logos/linkedin.svg'
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
