const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: process.env['NODE_ENV'],
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
      '/gettransactions': {
        target: 'http://localhost:3000'
      },
      '/delete/': {
        target: 'http://localhost:3000'
      },
      '/login': {
        target: 'http://localhost:3000'
      },
      '/signup': {
        target: 'http://localhost:3000'
      }
    }
  }
}