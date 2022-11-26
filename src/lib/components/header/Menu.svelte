<script>
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let open;

	let links = [
		['Home', '/'],
		['Repositories', '/repositories']
	];
</script>

{#if open}
	<ul>
		{#each links as link, i}
			<li transition:fly={{ y: -15, delay: 50 * i }}>
				<a href={link[1]} on:click={() => (open = !open)}>{link[0]}</a>
			</li>
		{/each}
	</ul>

	<hr transition:scale={{ duration: 750, easing: quadOut }} />
{/if}

<style lang="scss">
	@import 'variables.scss';

	ul {
		padding: 0;

		list-style: none;
		text-align: center;
	}

	a {
		padding: 16px;

		display: inline-block;
		font-size: 24px;
		letter-spacing: 2px;
		border-radius: 6px;
	}

	a:hover {
		background-color: $color-light-background-2-hover;
	}

	a:focus {
		background-color: $color-light-background-2-focus;
	}

	/* Fade */

	a {
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		overflow: hidden;
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-property: color, background-color;
		transition-property: color, background-color;
	}
</style>
