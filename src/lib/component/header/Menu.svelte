<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import type { Header } from '$lib/type/header/Menu';

	export let open: boolean;

	export let links: Header.LinkNavigation[];
</script>

{#if open}
	<div>
		<ul>
			{#each links as link, i}
				<li transition:fly={{ y: -15, delay: 50 * i }}>
					<a href={link.href} on:click={() => (open = !open)}>{link.name}</a>
				</li>
			{/each}
		</ul>

		<hr
			in:scale={{ duration: 750, easing: quadOut }}
			out:scale={{ duration: 250, easing: quadOut }}
		/>
	</div>
{/if}

<style lang="scss">
	@import 'variable.scss';

	div {
		position: absolute;
		top: 64px;
		left: 0;
		right: 0;
	}

	ul {
		padding: 0;

		list-style: none;
		text-align: center;
	}

	a {
		padding: 16px;

		display: inline-block;
		letter-spacing: 2px;
		border-radius: 8px;

		&:hover {
			background-color: $light-background-primary-hover;
		}

		/* Fade */

		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		overflow: hidden;
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-property: color, background-color;
		transition-property: color, background-color;

		/* ! Fade ! */
	}

	:global(body.dark-theme) {
		a {
			&:hover {
				background-color: $dark-background-primary-hover;
			}
		}
	}
</style>
