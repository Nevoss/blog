module.exports = () => ({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|webp)$/i,
      use: {
        loader: 'responsive-loader',
        options: {
          adapter: require('responsive-loader/sharp'),
          publicPath: '/_next/static/images/',
          outputPath: `${options.isServer ? '../' : ''}static/images/`,
        },
      },
    })

    if (!options.dev && options.isServer) {
      const originalEntry = config.entry

      config.entry = async () => {
        const entries = { ...(await originalEntry()) }

        entries['scripts/build-rss'] = [`./scripts/build-rss`]

        return entries
      }
    }

    return config
  },
})
