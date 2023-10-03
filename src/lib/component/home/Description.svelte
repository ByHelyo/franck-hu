<script lang="ts">
	import type { ImageInfo } from '$lib/type/misc/misc';

	const languages: ImageInfo[] = [
		{
			alt: 'C',
			src: '/badges/c.svg'
		},
		{
			alt: 'C++',
			src: '/badges/cpp.svg'
		},
		{
			alt: 'CSS',
			src: '/badges/css3.svg'
		},
		{
			alt: 'HTML',
			src: '/badges/html5.svg'
		},
		{
			alt: 'Java',
			src: '/badges/java.svg'
		},
		{
			alt: 'JavaScript',
			src: '/badges/javascript.svg'
		},
		{
			alt: 'Nix',
			src: '/badges/nix.svg'
		},
		{
			alt: 'Python',
			src: '/badges/python.svg'
		},
		{
			alt: 'Rust',
			src: '/badges/rust.svg'
		},
		{
			alt: 'TypeScript',
			src: '/badges/typescript.svg'
		}
	];

	const technologies: ImageInfo[] = [
		{
			alt: 'GitHub Actions',
			src: '/badges/github-actions.svg'
		},
		{
			alt: 'Gitlab CI',
			src: '/badges/gitlab-ci.svg'
		},
		{
			alt: 'Postgres',
			src: '/badges/postgres.svg'
		},
		{
			alt: 'React',
			src: '/badges/react.svg'
		},
		{
			alt: 'Svelte',
			src: '/badges/svelte.svg'
		},
		{
			alt: 'Tauri',
			src: '/badges/tauri.svg'
		},
		{
			alt: 'GraphQL',
			src: '/badges/graphql.svg'
		},
		{
			alt: 'Ansible',
			src: '/badges/ansible.svg'
		},
		{
			alt: 'Docker',
			src: '/badges/docker.svg'
		},
		{
			alt: 'Terraform',
			src: '/badges/terraform.svg'
		}
	];
</script>

<div class="container">
	<h2>About me</h2>
	<p>
		My name is Franck and I'm a computer science student from France. Here's some info about me!
	</p>
	<p />
	<h2>Languages</h2>
	<div class="badges">
		{#each languages as badge}
			<img alt={badge.alt} src={badge.src} />
		{/each}
	</div>
	<h2>Technologies</h2>
	<div class="badges">
		{#each technologies as badge}
			<img alt={badge.alt} src={badge.src} />
		{/each}
	</div>
</div>

<style>
	p {
		line-height: 1.5;
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
</style>
