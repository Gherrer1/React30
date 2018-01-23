const path = require('path');

module.exports = {
  entry: './src/public/js/react1.js',
  output: {
    path: path.resolve(__dirname, 'src/public/js'),
    filename: 'bundle1.js'
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
