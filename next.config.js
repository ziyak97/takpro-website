const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withVideos = require('next-videos')
const withPWA = require('next-pwa')

module.exports = withPlugins([
  [withImages],
  [withVideos],
  // [withPWA, { dest: 'public' }],
])
