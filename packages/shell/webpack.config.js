/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/Shell.tsx',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3001,
    inline: false,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    app1: { system: 'app1' },
  },
  devtool: 'eval-source-map',
  output: {
    filename: 'shell-bundle.js',
    libraryTarget: 'system',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    }),
    new ForkTsCheckerNotifierWebpackPlugin({ title: 'TypeScript', excludeWarnings: false }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: false,
    }),
  ],
};
