'use strict';
var webpack = require('webpack'),
  path = require('path');

var ORIGIN = __dirname + '/src';
var APP = __dirname + '/public';

module.exports = {
  // config goes here
  module:{
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass",
        include: APP
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },

  context: ORIGIN,
  entry: {
    app: [
      //'webpack/hot/dev-server',
      './entry/index.js']
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
