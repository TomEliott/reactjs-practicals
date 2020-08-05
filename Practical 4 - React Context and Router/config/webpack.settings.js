// webpack.settings.js - webpack settings config

// node modules
require('dotenv').config();

// Webpack settings exports
// noinspection WebpackConfigHighlighting
// eslint-disable-next-line no-undef
module.exports = {
  paths: {
    src: {
      base: '../src/',
    },
    template: '../src/',
    dist: {
      base: '../dist/',
      clean: ['**/*'],
    },
  },
  urls: {
    live: 'https://example.com/',
    local: 'http://example.test/',
    critical: 'http://example.test/',
    // eslint-disable-next-line no-undef
    publicPath: () => process.env.PUBLIC_PATH || '/',
  },
  vars: {
    cssName: 'styles',
  },
  entries: {
    app: 'index.js',
  },
  copyWebpackConfig: [
    {
      from: './dist/index.html',
      to: '200.[ext]',
    },
  ],
  devServerConfig: {
    // eslint-disable-next-line no-undef
    public: () => process.env.DEVSERVER_PUBLIC || 'http://localhost:1234',
    // eslint-disable-next-line no-undef
    host: () => process.env.DEVSERVER_HOST || 'localhost',
    // eslint-disable-next-line no-undef
    poll: () => process.env.DEVSERVER_POLL || false,
    // eslint-disable-next-line no-undef
    port: () => process.env.DEVSERVER_PORT || 1234,
    // eslint-disable-next-line no-undef
    https: () => process.env.DEVSERVER_HTTPS || false,
  },
  manifestConfig: {
    basePath: '',
  },
  createSymlinkConfig: [
    {
      origin: 'img/favicons/favicon.ico',
      symlink: '../favicon.ico',
    },
  ],
};
