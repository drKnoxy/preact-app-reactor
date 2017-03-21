var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.join(__dirname, "build/static/js")
  },
  plugins: [
    // this assumes your vendor imports exist in the node_modules directory
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest"
    })
  ],
  module: {
    rules: []
  },
  resolve: {
    alias: {
      components: "src/components",
      screens: "src/screens",
      react: "preact"
    }
  }
};
