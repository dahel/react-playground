var webpack = require('webpack');
var path = require('path');

// todo order it
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    path.resolve(ROOT_PATH, 'src/index.jsx')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx'],
    alias: {
      config: path.join(__dirname, 'src/app/config/config.development'),
      actionTypes: path.join(__dirname, 'src/app/actions/types'),
      store: path.join(__dirname, 'src/app/store/store.development')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
