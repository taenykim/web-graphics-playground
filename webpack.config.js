const path = require("path");

module.exports = {
  entry: {
    "threejs/rotatingCube/index": "./src/threejs/rotatingCube/index.ts",
    "threejs/drawingLines/index": "./src/threejs/drawingLines/index.ts",
    "threejs/responsive/index": "./src/threejs/responsive/index.ts",
  },
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
    filename: "[name].js",
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
