const withPWA = require('next-pwa');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const Dotenv = require("dotenv-webpack");

module.exports = {
  ...withPWA({
    ...withFonts(withImages({
      webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
        config.resolve.modules.push(__dirname)
        config.plugins.push(new Dotenv({ silent: true }));
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        return config;
      },
    })),
    pwa: {
      dest: 'public'
    },
  }),
  exportTrailingSlash: true,
  compress: true,
};

