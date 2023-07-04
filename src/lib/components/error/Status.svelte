<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container">
	<div class="status">{$page.status}</div>
	<div class="status">
		{$page.error?.message}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.status {
		font-weight: bold;
		font-size: 64px;
		text-align: center;
	}
</style>
