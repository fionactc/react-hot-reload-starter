const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${__dirname}/index.html`,
  filename: 'index.html',
  inject: 'body'
})
const webpack = require('webpack');

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8000",
    "webpack/hot/only-dev-server",
    './src/index.js'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: `${__dirname}/dist`,
    publicPath: '/',
    inline: true,
    port: 8000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
