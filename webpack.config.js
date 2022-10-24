const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  // why __dirname? how does path.resolve work?
  // without babel, the module and resolve parts are not necessary
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundled-script.js",
    publicPath: "/",
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    historyApiFallback: true,
  },
};
