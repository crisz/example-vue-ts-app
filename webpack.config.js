const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
require('file-loader');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.ts$/,
              use: 'ts-loader'
          },
          {
            test: /\.vue$/,
            use: [{loader: 'vue-loader', options: {loaders: {}, esModule: false}}, {loader: 'ts-loader'}]
          },
          {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
          },
          {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader',
            query: {
              name: '[name].[ext]?[hash]',
              useRelativePath: true
            }
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js' // I tried all of these...
    },
    extensions: ['.vue', '.ts', '.js', '.json']
  },
};