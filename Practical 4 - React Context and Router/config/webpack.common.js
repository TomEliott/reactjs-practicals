// node modules
const path = require('path');
const merge = require('webpack-merge');

// webpack plugins
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

// config files
const pkg = require('../package.json');
const settings = require('./webpack.settings.js');

// Configure Babel loader
const configureBabelLoader = (browserList) => {
  return {
    test: /\.js$/,
    exclude: [/(node_modules|bower_components)/],
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          sourceType: 'unambiguous',
          presets: [
            '@babel/preset-react',
            [
              '@babel/preset-env',
              {
                modules: false,
                corejs: {
                  version: 2,
                  proposals: true,
                },
                useBuiltIns: 'usage',
                targets: {
                  browsers: browserList,
                },
              },
            ],
          ],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
      'eslint-loader',
    ],
  };
};

// Configure Entries
const configureEntries = () => {
  let entries = {};
  for (const [key, value] of Object.entries(settings.entries)) {
    // eslint-disable-next-line no-undef
    entries[key] = path.resolve(__dirname, settings.paths.src.base + value);
  }

  return entries;
};

// Configure Manifest
const configureManifest = (fileName) => {
  return {
    fileName: fileName,
    basePath: settings.manifestConfig.basePath,
    map: (file) => {
      file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, '$2');
      return file;
    },
  };
};

// Configure Html webpack
const configureIndexHtml = () => {
  return {
    template: './src/index.html',
    filename: 'index.html',
    inject: true,
  };
};

const configure200Html = () => {
  return {
    template: './src/index.html',
    filename: '200.html',
    inject: true,
  };
};

// The base webpack config
const baseConfig = {
  name: pkg.name,
  entry: configureEntries(),
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, settings.paths.dist.base),
    publicPath: settings.urls.publicPath(),
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: 'Webpack',
      excludeWarnings: true,
      alwaysNotify: true,
    }),
    new HtmlWebpackPlugin(configureIndexHtml()),
    new HtmlWebpackPlugin(configure200Html()),
  ],
};

// Legacy webpack config
const legacyConfig = {
  module: {
    rules: [
      configureBabelLoader(Object.values(pkg.browserslist.legacyBrowsers)),
    ],
  },
  plugins: [new ManifestPlugin(configureManifest('manifest-legacy.json'))],
};

// Common module exports
// noinspection WebpackConfigHighlighting
// eslint-disable-next-line no-undef
module.exports = {
  legacyConfig: merge.strategy({
    module: 'prepend',
    plugins: 'prepend',
  })(baseConfig, legacyConfig),
};
