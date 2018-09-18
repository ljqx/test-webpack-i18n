const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main',
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
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist-lib'),
    libraryTarget: 'amd'
  },
  externals: [/^\.\./, 'lodash'],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
    }
  },
  node: false,
  // plugins: [
  //   new webpack.EnvironmentPlugin({
  //     LOCALE: locale,
  //   }),
  // ]
};
