/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/app.js',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    port: 3002,
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
    shell: 'shell',
  },
  devtool: 'source-map',
  output: {
    filename: 'app1-bundle.js',
    libraryTarget: 'system',
  },
  resolve: {
    extensions: ['.jsx', '.ts', '.js'],
  },
};
