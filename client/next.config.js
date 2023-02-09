/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:4200/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
