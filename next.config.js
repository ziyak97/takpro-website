const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withVideos = require('next-videos')
const withPWA = require('next-pwa')
require('dotenv').config()

module.exports = withPlugins([
  [withImages],
  [withVideos],
  {
    env: {
      API_URL: process.env.API_URL,
    },
    publicRuntimeConfig: {
      API_URL: process.env.API_URL,
    },
  },
  // [withPWA, { dest: 'public' }],
])
