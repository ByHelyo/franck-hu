<script lang="ts">
	import type { ImageInfo } from '$lib/type/misc/misc';

	let languages: ImageInfo[] = [
		{
			alt: 'C',
			src: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white'
		},
		{
			alt: 'C++',
			src: 'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white'
		},
		{
			alt: 'CSS',
			src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'
		},
		{
			alt: 'HTML',
			src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'
		},
		{
			alt: 'Java',
			src: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white'
		},
		{
			alt: 'JavaScript',
			src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'
		},
		{
			alt: 'Nix',
			src: 'https://img.shields.io/badge/NIX-5277C3.svg?style=for-the-badge&logo=NixOS&logoColor=white'
		},
		{
			alt: 'Python',
			src: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'
		},
		{
			alt: 'Rust',
			src: 'https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white'
		},
		{
			alt: 'TypeScript',
			src: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'
		}
	];

	let technologies: ImageInfo[] = [
		{
			alt: 'GitHub Actions',
			src: 'https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white'
		},
		{
			alt: 'Gitlab CI',
			src: 'https://img.shields.io/badge/gitlab%20ci-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white'
		},
		{
			alt: 'Postgres',
			src: 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'
		},
		{
			alt: 'React',
			src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
		},
		{
			alt: 'Svelte',
			src: 'https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white'
		},
		{
			alt: 'Tauri',
			src: 'https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF'
		},
		{
			alt: 'GraphQL',
			src: 'https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white'
		},
		{
			alt: 'Ansible',
			src: 'https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white'
		},
		{
			alt: 'Docker',
			src: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'
		},
		{
			alt: 'Terraform',
			src: 'https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white'
		}
	];
</script>

<div class="container">
	<h2>About me</h2>
	<p>
		My name is Franck and I'm a computer science student from France. Here's some info about me! My
		name is Franck and I'm a computer science student from France. Here's some info about me!
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
