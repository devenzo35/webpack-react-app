const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForJS = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [["@babel/preset-react", { runtime: "automatic" }]],
  },
};

const rulesForCSS = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

module.exports = (env, args) => {
  const { mode } = args;

  const isProduction = mode === "production";

  return {
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    module: {
      rules: [rulesForJS, rulesForCSS],
    },
    devServer: {
      port: 3006,
      open: true,
    },
  };
};
