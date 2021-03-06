const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};
const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
};

module.exports = {

  entry: {
    'react-modal': './lib/index.js',
    'react-modal.min': './lib/index.js'
  },

  externals: {
    react: reactExternal,
    'react-dom': reactDOMExternal
  },

  output: {
    filename: 'index.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'ReactModal'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }

};
