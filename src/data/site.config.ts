interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://digitaldiary-7hgkb02ss-wandering-peanuts-projects.vercel.app/', // Write here your website url
	author: 'peanut', // Site author
	title: 'wandering peanut', // Site title.
	description: 'my blog', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
