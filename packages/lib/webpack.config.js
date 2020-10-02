const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: ['./foo', './baz'],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3004,
  },
  output: {
    publicPath: 'http://localhost:3004/',
  },
  module: {
    rules: [],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'lib',
      library: { type: 'var', name: 'lib' },
      filename: 'remoteEntry.js',
      exposes: {
        foo: './foo',
        baz: './baz',
      },
    }),
  ],
};
