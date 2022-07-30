const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const srcDir = path.join(__dirname, "..", "src");
const devTestingDir = path.join(srcDir, "view", "devTesting");

module.exports = merge(common, {
   devtool: "inline-source-map",
   mode: "development",
   entry: {
      notepad: path.join(devTestingDir, "devJs", "notepad.tsx"),
      dashboard: path.join(devTestingDir, "devJs", "dashboard.tsx")
   },
   output: {
      path: path.join(__dirname, "../devServeDist"),
      filename: "[name].js",
   },
   devServer: {
      static: ["devServeDist"],
   },
   plugins: [
      new CopyPlugin({
         patterns: [{ from: ".", to: ".", context: path.join(devTestingDir, "devStatic/") }],
         options: {},
      }),
   ],
});