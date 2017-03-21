var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var baseConfig = require("./base");

module.exports = function(env) {
  return webpackMerge(baseConfig(), {
    devtool: 'cheap-module-source-map', // eval maybe
    plugins: [
    ]
  });
};
