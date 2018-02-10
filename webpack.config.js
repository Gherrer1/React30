const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
  	bundle1: './src/components/react1.js',
  	bundle3: './src/components/react3.js',
  	bundle29: './src/components/react29.js'	
  },
  output: {
    path: path.resolve(__dirname, 'src/public/js'),
    filename: '[name].js'
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
