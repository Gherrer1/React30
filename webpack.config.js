const path = require('path');

module.exports = {
  entry: './src/public/js/react3.js',
  output: {
    path: path.resolve(__dirname, 'src/public/js'),
    filename: 'bundle3.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
