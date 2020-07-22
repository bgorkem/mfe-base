/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/app.js',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    port: 3003,
    inline: false,
    hot: true,
    writeToDisk: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Credentials': 'true',
    },
  },
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            externalDependencies: true,
          },
        },
      },
    ],
  },
  externals: {
    shell: 'shell',
  },
  devtool: 'source-map',
  output: {
    filename: 'app2-bundle.js',
    libraryTarget: 'system',
  },
  resolve: {
    extensions: ['*', '.mjs', '.svelte', '.js', '.json'],
  },
};
