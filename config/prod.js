var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var baseConfig = require("./base");

module.exports = function(env) {
  return webpackMerge(baseConfig(), {
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
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  });
};
