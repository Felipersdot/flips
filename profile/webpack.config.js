const webpack = require('webpack');

module.exports = {
  // other webpack configuration options
  resolve: {
    alias: {
      // define your aliases here
    },
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    // other resolver options as needed
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ],
  // other webpack configuration options
};
