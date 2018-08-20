const path = require('path');
const webpack = require('webpack');

const locales = ['en', 'fr'];

module.exports = locales.map(locale => ({
  name: locale,
  entry: {
    main: './src/main',
    another: './src/another',
    third: './src/third',
  },
  mode: 'none',
  output: {
    filename: `[name].${locale}.[contenthash].js`,
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      LOCALE: locale,
    }),
  ]
}));
