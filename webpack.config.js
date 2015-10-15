'use strict';
var webpack = require('webpack'),
  path = require('path');

var APP = __dirname + '/public';

module.exports = {
  // config goes here
  loaders: [
    {
      test: /\.scss$/,
      loader: "style!css!sass",
      include: APP
    },
    {test: /\.js$/, loader: 'babel-loader'}
  ],
  context: APP,

  entry: {
    app: [
      'webpack/hot/dev-server',
      './js/app.js']
  },
  output: {
    path: APP,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
