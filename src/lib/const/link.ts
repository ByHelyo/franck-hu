import type { SocialInfo } from '$lib/type/home/social';
import type { AnchorInfo } from '$lib/type/misc/misc';

export const links: SocialInfo[] = [
	{
		name: 'Mail',
		href: 'mailto:byhelyo@gmail.com',
		src: 'logo/mail.svg'
	},
	{
		name: 'GitHub',
		href: 'https://github.com/ByHelyo',
		src: 'logo/github.svg'
	},

	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/franck-hu',
		src: 'logo/linkedin.svg'
	}
];

export const headerLinks: AnchorInfo[] = [
	{
		content: 'Home',
		href: '/'
	},
	{
		content: 'Repositories',
		href: '/repositories'
	},
	{
		content: 'Source',
		href: 'https://github.com/ByHelyo/franck-hu'
	}
];
