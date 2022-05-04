const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
  mode: "development",
};
