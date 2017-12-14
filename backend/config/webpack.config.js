'use strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const {
  commonLoaders,
  globalResolve,
  resolveLoader,
} = require('./common.js');

module.exports = {
  context: path.resolve('.'),
  devtool: 'eval-source-map',
  entry: {
    server: './src/server.js'
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  externals: nodeExternals(),
  output: {
    path: path.join(__dirname, '..', '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: [
          {loader: 'babel-loader'},
        ],
      },

      {test: /\.(scss|gif)$/, loader: 'ignore-loader'},
    ].concat(commonLoaders),
  },
  resolve: globalResolve,
  resolveLoader,
};