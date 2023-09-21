const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index.html',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin]


}