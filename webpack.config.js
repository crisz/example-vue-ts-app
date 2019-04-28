const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.ts$/,
              use: 'ts-loader'
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};