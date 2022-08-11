const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const srcDir = path.join(__dirname, "..", "src");
const chromeFilesDir = path.join(srcDir, "view", "chromeFiles");

module.exports = merge(common, {
    mode: 'production',
    entry: {
        popup: path.join(chromeFilesDir, "popup.tsx"),
        options: path.join(chromeFilesDir, "options.tsx"),
        background: path.join(chromeFilesDir, "background.ts"),
        content_script: path.join(chromeFilesDir, "content_script.ts"),
    },
    output: {
        path: path.join(__dirname, "../dist/js"),
        filename: "[name].js",
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: "../", context: "public" }],
            options: {},
        }),
    ],
});