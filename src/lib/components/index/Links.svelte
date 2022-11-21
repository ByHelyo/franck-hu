<script>
	import AnchorImg from '$lib/components/utils/AnchorImg.svelte';

	let links = [
		['https://github.com/ByHelyo', 'misc/github.svg'],
		['mailto:byfranckhu@gmail.com', 'misc/mail.svg'],
		['https://www.linkedin.com/in/franck-hu', 'misc/linkedin.svg']
	];
</script>

<ul>
	{#each links as link}
		<li>
			<AnchorImg href={link[0]} src={link[1]} />
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;

		list-style: none;
		display: flex;
		justify-content: center;
	}
</style>
