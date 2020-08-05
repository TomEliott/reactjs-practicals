// webpack.prod.js - production builds

// node modules
const git = require('git-rev-sync');
const merge = require('webpack-merge');
const moment = require('moment');
const path = require('path');
const webpack = require('webpack');

// webpack plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CreateSymlinkPlugin = require('create-symlink-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// config files
const common = require('./webpack.common.js');

const settings = require('./webpack.settings.js');

// Configure file banner
const configureBanner = () => {
  return {
    banner: [
      '/*!',
      ' * @name           ' + '[filebase]',
      ' * @build          ' + moment().format('llll') + ' ET',
      ' * @release        ' + git.long() + ' [' + git.branch() + ']',
      ' * @copyright      Copyright (c) ' + moment().format('YYYY') + ' *',
      ' */',
      '',
    ].join('\n'),
    raw: true,
  };
};

// Configure Bundle Analyzer
const configureBundleAnalyzer = () => {
  return {
    analyzerMode: 'static',
    reportFilename: 'report-legacy.html',
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

// Configure optimization
const configureOptimization = () => {
  return {
    splitChunks: {
      maxSize: 244000,
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin(configureTerser()),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
          safe: true,
          discardComments: true,
        },
      }),
    ],
  };
};

// Configure Postcss loader
const configurePostcssLoader = () => {
  return {
    test: /\.(pcss|css)$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
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

// Configure terser
const configureTerser = () => {
  return {
    cache: true,
    parallel: true,
    sourceMap: true,
  };
};

// Production module exports
// eslint-disable-next-line no-undef
module.exports = [
  merge(common.legacyConfig, {
    output: {
      filename: path.join('./js', '[name]-legacy.[chunkhash].js'),
    },
    mode: 'production',
    devtool: 'source-map',
    optimization: configureOptimization(),
    module: {
      rules: [configurePostcssLoader(), configureImageLoader()],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, settings.paths.dist.base),
        filename: path.join('./css', '[name].[chunkhash].css'),
      }),
      new webpack.BannerPlugin(configureBanner()),
      new CreateSymlinkPlugin(settings.createSymlinkConfig, true),
      new BundleAnalyzerPlugin(configureBundleAnalyzer()),
    ],
  }),
];
