const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const path = require("path");
const outputFolder = path.resolve(__dirname, "dist");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "main_.js",
    path: outputFolder
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        // use: ['babel-loader', 'eslint-loader'],
        include: path.resolve(__dirname, 'src'),
        options: {
          failOnError: true,
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: outputFolder
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
    }),
    new CopyPlugin([
      // temporary
      {
        from: '*.js',
        to: outputFolder,
      },
      {
        from: 'lang',
        to: path.join(outputFolder, 'lang'),
      },
      {
        from: 'src/css/images/ut_small.png',
        to: path.join(outputFolder, 'images'),
      },
      {
        from: 'src/css/images/snake.gif',
        to: path.join(outputFolder, 'images'),
      },
      {
        from: 'src/css/images/ut.png',
        to: path.join(outputFolder, 'images'),
      },
      {
        from: 'src/css/images/mootools.png',
        to: path.join(outputFolder, 'images'),
      },
    ]),
  ]
};