// webpack.dev.js - developmental builds

// node modules
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// config files
const common = require('./webpack.common.js');
const settings = require('./webpack.settings.js');

// Configure the webpack-dev-server
const configureDevServer = () => {
  return {
    public: settings.devServerConfig.public(),
    // eslint-disable-next-line no-undef
    contentBase: path.resolve(__dirname, settings.paths.template),
    host: settings.devServerConfig.host(),
    port: settings.devServerConfig.port(),
    https: !!parseInt(settings.devServerConfig.https()),
    disableHostCheck: true,
    hot: true,
    overlay: true,
    watchContentBase: true,
    watchOptions: {
      poll: !!parseInt(settings.devServerConfig.poll()),
      ignored: /node_modules/,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
  };
};

// Configure Image loader
const configureImageLoader = () => {
  return {
    test: /\.(png|jpe?g|gif|svg|webp)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash].[ext]',
        },
      },
    ],
  };
};

// Configure the Postcss loader
const configurePostcssLoader = () => {
  return {
    test: /\.(pcss|css)$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          url: false,
          importLoaders: 2,
          sourceMap: true,
        },
      },
      {
        loader: 'resolve-url-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  };
};

// Development module exports
// eslint-disable-next-line no-undef
module.exports = merge(common.legacyConfig, {
  output: {
    filename: '[name].[hash].js',
    publicPath: settings.devServerConfig.public() + '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: configureDevServer(),
  module: {
    rules: [configurePostcssLoader(), configureImageLoader()],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
