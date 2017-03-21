var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.join(__dirname, "build/static/js")
  },
  plugins: [
    // Anything in node_modules goes to the vendor chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    // Adding the manifest helps cache-busting not break on every build...
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest"
    })
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  resolve: {
    alias: {
      components: "src/components",
      screens: "src/screens",
      react: "preact"
    }
  }
};
