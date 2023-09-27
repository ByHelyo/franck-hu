<script lang="ts">
	export let name: string;

	export let href: string;

	export let src: string;
</script>

<a {href}><img {src} alt="" />{name}</a>

<style lang="scss">
	@import 'variable.scss';

	a {
		display: flex;
		justify-content: center;
		gap: 8px;
		border-radius: 4px;
		padding: 8px 16px;
		border: 1px solid $light-background-primary-border;

		&:hover {
			background-color: $light-background-primary-hover;
		}
	}

	img {
		width: 16px;
		height: 16px;
		position: relative;
		top: 1px;
	}

	:global(body.dark-theme) {
		a {
			border-color: $dark-background-primary-border;

			&:hover {
				background-color: $dark-background-primary-hover;
			}
		}

		img {
			filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(353deg) brightness(100%)
				contrast(107%);
		}
	}

	@media (max-width: 480px) {
		a {
			padding: 16px 32px;
		}
	}
</style>
