<script lang="ts">
	import ProfileDetails from '$lib/component/home/ProfileDetails.svelte';
</script>

<div class="container">
	<img src="me.jpg" alt="" />

	<ProfileDetails />
</div>

<style>
	.container {
		display: flex;
		gap: 32px;
	}

	img {
		width: 200px;
		height: 200px;
		border: 1px solid #ffffff;
		border-radius: 50%;
	}

	@media (max-width: 640px) {
		.container {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
