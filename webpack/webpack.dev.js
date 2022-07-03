const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const srcDir = path.join(__dirname, "..", "src");

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: {
        notepad: path.join(srcDir, "components", "Notepad.tsx"),
    },
    output: {
        path: path.join(__dirname, "../devServeDist"),
        filename: "[name].js",
    },
    devServer: {
        static: ['devServeDist']
    },
    plugins: [
        new CopyPlugin({
           patterns: [{ from: ".", to: ".", context: "devServe/" }],
           options: {},
        }),
     ],
});