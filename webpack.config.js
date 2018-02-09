const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/public/js/react29.js',
  output: {
    path: path.resolve(__dirname, 'src/public/js'),
    filename: 'bundle29.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
