const path = require('path');

module.export = {
  entry: path.resolve(__dirname, 'src', 'public', 'js', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.js*/,
        exclude: /node_modules/,
        loader: [
          {
          loader: 'babel-loader'
        }
      ]
      }
    ]
  }
}

