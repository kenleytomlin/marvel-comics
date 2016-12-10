const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const babelrc = fs.readFileSync('./.babelrc');
const _ = require('lodash')

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    app: ['react-hot-loader/patch','webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000','./app/js/client.js'],
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
      loader: 'babel-loader',
      options: {
        presets: ["stage-0","latest","react"],
        plugins: ["transform-decorators-legacy","transform-class-properties","transform-runtime","transform-es2015-classes","transform-object-rest-spread","react-hot-loader/babel"]
      },
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap&sourceComments'
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader!'
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
    new webpack.NoErrorsPlugin()
  ]
}

