"use strict";

var path = require('path');

var HTMLWebpackPlugin = require('html-webpack-plugin');

var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

var TreserPlugin = require('terser-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production';
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devServer: {
    watchFiles: path.resolve(__dirname, 'src'),
    port: 3000,
    watchContentBase: true
  },
  plugins: [new HTMLWebpackPlugin({
    template: './src/index.html'
  }), new CleanWebpackPlugin(), new MiniCssExtractPlugin({
    filename: '[name].[hash].css'
  })],
  module: {
    rules: [{
      test: /\.s[ac]ss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }, {
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      exclude: /node_modules/
    }]
  },
  optimization: {
    minimizer: isProd ? [new CssMinimizerPlugin(), new TreserPlugin()] : []
  }
};