var path = require('path');

module.exports = {
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  postcss: function (webpack) {
    return [require('postcss-import')({
      addDependencyTo: webpack
    }), require('autoprefixer'), require('precss'), require('postcss-custom-media')];
  },
  babel: {
    presets: ["es2015"],
    plugins: ["transform-runtime"]
  }
}
