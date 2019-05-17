const path = require('path');
const MiniCssExctractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExctractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: {sourceMap: true, config: {path: 'src/js/config/postcss.config.js'}}
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExctractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: {sourceMap: true, config: {path: 'src/js/config/postcss.config.js'}}
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExctractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    overlay: true
  }
}