const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'public', 'js', 'index.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[hash].js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [{
          loader: 'eslint-loader'
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // exclude: /\.module\.css$/
      },
      // {
      //   test: /\.png$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       mimetype: 'image/png'
      //     }
      //   }]
      // },
      // {
      //   test: /\.svg$/,
      //   use: 'file-loader'
      // }
    ],
  },
}