const webpack = require('webpack');

module.exports = {
  entry: './ex/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port: 8090,
    contentBase: './public'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  }
}
