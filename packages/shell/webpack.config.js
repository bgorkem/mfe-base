const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/Shell',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    filename: 'shell.js',
    publicPath: 'http://localhost:3001/',
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: { type: 'var', name: 'shell' },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
