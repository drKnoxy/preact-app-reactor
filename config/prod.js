var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var BabiliPlugin = require('babili-webpack-plugin');

var baseConfig = require("./base");

module.exports = function(env) {
  return webpackMerge(baseConfig(), {
    devtool: 'source-map',
    plugins: [
      // Tell things to run in production mode
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new BabiliPlugin()
    ]
  });
};
