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

    return config
  },
})
