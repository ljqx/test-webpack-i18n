const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const locales = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt-BR', 'pt-PT', 'zh-Hans', 'zh-Hant'];

module.exports = locales.map(locale => ({
  name: locale,
  entry: {
    main: './src/main',
    another: './src/another',
    third: './src/third',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /translation/,
        use: 'raw-loader'
      }
    ]
  },
  output: {
    filename: `[name].${locale}.[contenthash].js`,
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
    }
  },
  node: {
    process: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      excludeChunks: ['another', 'third'],
      filename: `${locale}.html`
    }),
    new webpack.EnvironmentPlugin({
      LOCALE: locale,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery/dist/jquery.min',
      _: 'lodash/lodash.min'
    })
  ]
}));
