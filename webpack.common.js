const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('**********************************', __dirname);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react'],
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  // module: {
  //   loaders: [
  //     { 
  //       test: /\.jsx?$/, 
  //       loader: 'babel-loader', 
  //       exclude: /node_modules/, 
  //       options: {
  //         presets: ['es2015', 'react']
  //       }
  //     },
  //   ],
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         'style-loader',
  //         'css-loader'
  //       ]
  //     }
  //   ]
  // },
  // plugins: [
  //   new CleanWebpackPlugin(['dist']),
  //   new HtmlWebpackPlugin({
  //     title: 'Production'
  //   })
  // ],
  // resolve: {
  //   extensions: ['.js', '.jsx', '.css']
  // },
};