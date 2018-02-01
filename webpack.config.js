const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

//for 2nd approach-prevent duplication
//const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js'
   // another: './src/another-module.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // Specify the common bundle's name.
    // })
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',//for dynamic imports
    path: path.resolve(__dirname, 'dist')
  }
};