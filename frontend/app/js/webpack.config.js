const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    app: ['react-hot-loader/patch','webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000','./app/js/index.js'],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-connect',
      'redux-saga'
    ]
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/public',
    filename: 'js/[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.(jpe?g|png|ico)$/,
      loader: `url-loader?context=${__dirname + '/app/assets'}`
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: `${__dirname}/app/assets/`,
        from: '**/*',
        ignore: [
          { glob: 'images/icon/**/*' },
          '*.ico'
        ],
        to: './'
      }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      'components': path.join(__dirname, 'js/components'),
      'containers': path.join(__dirname, 'js/containers'),
      'styles': path.join(__dirname, 'js/components/style'),
      'reducers': path.join(__dirname, 'js/reducers')
    }
  }
}

