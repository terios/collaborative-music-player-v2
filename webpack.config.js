const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, 'src/index.js')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({filename: 'index.html', template: './src/public/index.html', inject: 'body'})],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
