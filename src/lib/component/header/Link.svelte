<script lang="ts">
	export let href: string;
	export let content: string;
</script>

<a {href}>{content}</a>

<style lang="scss">
	@import 'variable.scss';

	a {
		display: inline-block;
		padding: 11.55px;
		border-radius: 4px;

		&:hover {
			background: $light-background-primary-hover;
		}
	}

	:global(html.dark) {
		a {
			&:hover {
				background: $dark-background-primary-hover;
			}
		}
	}

	@media (max-width: 640px) {
		a {
			display: none;
		}
	}
</style>
