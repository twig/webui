const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputFolder = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputFolder
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: outputFolder
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          outputPath: "images"
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
