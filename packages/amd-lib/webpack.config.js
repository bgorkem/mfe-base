/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './foo.js',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    port: 3004,
    inline: false,
    hot: true,
    writeToDisk: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Credentials': 'true',
    },
  },

  devtool: 'source-map',
  output: {
    filename: 'amd-lib-bundle.js',
    library: 'amd-lib',
    libraryTarget: 'amd',
  },
  resolve: {
    extensions: ['.js'],
  },
};
