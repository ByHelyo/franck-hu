<script lang="ts">
	const supportedLanguages = ['c', 'rust', 'nix'];

	let hovered = false;

	export let name: string;

	export let description: string;

	export let stars: number;

	export let url: string;

	export let language: string;

	function buildLanguagePath(language: string) {
		return `logos/${language.toLowerCase()}.svg`;
	}
</script>

<a
	href={url}
	class:hovered
	on:mouseenter={() => {
		hovered = true;
	}}
	on:mouseleave={() => {
		hovered = false;
	}}
>
	<div>
		<h2>{name}</h2>
		<p>{description}</p>
	</div>

	<div class="details">
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
	@import 'variables.scss';

	a {
		height: 180px;
		padding-inline: 16px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 6px;
		background-color: $light-background-primary;
		border: 2px solid $light-background-primary-border;

		&:hover {
			background-color: $light-background-primary-hover;
		}

		&:focus {
			background-color: $light-background-primary-focus;
		}

		/* Fade */
		&.hovered {
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
	}

	:global(body.dark-theme) {
		a {
			background-color: $dark-background-primary;
			border-color: $dark-background-primary-border;

			&:hover {
				background-color: $dark-background-primary-hover;
			}

			&:focus {
				background-color: $dark-background-primary-focus;
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

	div.details {
		display: flex;
		gap: 32px;
	}
</style>
