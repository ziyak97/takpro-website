const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withVideos = require('next-videos')
const withPWA = require('next-pwa')
require('dotenv').config()

module.exports = withPlugins([
	[withImages],
	[withVideos],
	[
		withPWA,
		{
			pwa: {
				dest: 'public',
			},
		},
	],
	{
		env: {
			API_URL: process.env.API_URL,
			TAWK_KEY: process.env.TAWK_KEY,
		},
		publicRuntimeConfig: {
			API_URL: process.env.API_URL,
			TAWK_KEY: process.env.TAWK_KEY,
		},
		images: {
			domains: ['backend.taskproservices.com'],
		},
		target: 'serverless',
	},
])
