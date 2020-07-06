/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    port: 3001,
    inline: false,
    hot: true,
    writeToDisk: true,
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
  output: {
    filename: 'shell-bundle.js',
    libraryTarget: 'system',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: false,
    }),
  ],
};
