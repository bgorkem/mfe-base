/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'workspaces-bundle.js',
    libraryTarget: 'system',
  },
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
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    app1: 'app1',
  },
  devtool: 'source-map',

  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
