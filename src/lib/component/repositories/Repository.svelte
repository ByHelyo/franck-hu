<script lang="ts">
	import { fly } from 'svelte/transition';

	const supportedLanguages = ['c', 'rust', 'nix', 'svelte', 'typescript'];

	export let name: string;

	export let description: string;

	export let stars: number;

	export let url: string;

	export let language: string;

	function buildLanguagePath(language: string) {
		return `logo/${language.toLowerCase()}.svg`;
	}
</script>

<a href={url} transition:fly>
	<div>
		<h3>{name}</h3>
		<p>{description}</p>
	</div>

	<div class="container">
		<p>
			<img src="misc/star.svg" alt="" />{stars}
		</p>

		{#if language != null && supportedLanguages.includes(language.toLowerCase())}
			<p>
				<img src={buildLanguagePath(language)} alt="" />{language}
			</p>
		{/if}
	</div>
</a>

<style lang="scss">
	@import 'variable.scss';

	a {
		height: 180px;
		padding-inline: 16px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 4px;
		border: 1px solid $light-background-primary-border;

		&:hover {
			background-color: $light-background-primary-hover;

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
	}

	:global(body.dark-theme) {
		a {
			border-color: $dark-background-primary-border;

			&:hover {
				background-color: $dark-background-primary-hover;
			}
		}
	}

	img {
		top: 2px;
		width: 16px;
		height: 16px;
		margin-inline-end: 8px;

		position: relative;
	}

	.container {
		display: flex;
		gap: 32px;
	}
</style>
