const webpack = require("webpack");
const path = require("path");
const vuePlugin = require("vue-loader/lib/plugin-webpack4");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

const config = {
  target: "web",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "[name]-[hash:8].js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [new vuePlugin()],
};

if (isDev) {
  config.devtool = "cheap-module-eval-source-map";
  config.devServer = {
    port: 8013,
    host: "127.0.0.1",
    hot: true,
    open: true,
  };
  config.plugins.push(
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(), // 清除原来生成的内容
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = config;
