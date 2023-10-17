<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { headerLinks } from '$lib/const/link';

	export let open: boolean;
</script>

{#if open}
	<div class="container">
		<ul>
			{#each headerLinks as anchor, i}
				<li transition:fly={{ y: -15, delay: 50 * i }}>
					<a href={anchor.href} on:click={() => (open = !open)}>{anchor.content}</a>
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

	.container {
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
