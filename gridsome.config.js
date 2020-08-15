// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Alex\'s Portfolio 🤠',
  siteUrl: 'https://neoxelox.com',
  siteDescription: 'Welcome to my Portfolio! 👋',
  titleTemplate: '%s - Alex\'s Portfolio 🤠',
  icon: {
    favicon: './src/assets/images/favicon.png', // 192x192px
    touchicon: './src/assets/images/touchicon.png' // 180x180px
  },
  outputDir: 'dist',
  permalinks: {
    trailingSlash: true
  },
  templates: {},
  metadata: { // Global metada (requires restart)
  },
  plugins: []
}
