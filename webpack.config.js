const path = require("path");

module.exports = {
  entry: {
    "threejs/tutorial/rotatingCube/index":
      "./src/threejs/tutorial/rotatingCube/index.ts",
    "threejs/tutorial/drawingLines/index":
      "./src/threejs/tutorial/drawingLines/index.ts",
    "threejs/tutorial/responsive/index":
      "./src/threejs/tutorial/responsive/index.ts",
    "threejs/primitives/BoxGeometry/index":
      "./src/threejs/primitives/BoxGeometry/index.ts",
    "threejs/primitives/CircleGeometry/index":
      "./src/threejs/primitives/CircleGeometry/index.ts",
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
