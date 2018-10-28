const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const srcPath = path.join(__dirname, '/src');
const outputPath = path.join(__dirname, '/dist');

module.exports = {
  context: srcPath,
  entry: {
    app: path.join(srcPath, 'index.js'),
  },
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          compact: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new CleanWebpackPlugin(outputPath, { allowExternal: true }),
  ],
};
