import { API_KEY } from '$env/static/private';
export async function load() {
	const res = await fetch('https://api.github.com/user/repos', {
		method: 'GET',
		headers: {
			Accept: 'application/vnd.github+json',
			Authorization: `Bearer ${API_KEY}`
		}
	});

	const data = await res.json();

	return {
		repositories: data
	};
}
