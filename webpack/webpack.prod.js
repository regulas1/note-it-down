const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const srcDir = path.join(__dirname, "..", "src");

module.exports = merge(common, {
    mode: 'production',
    entry: {
        popup: path.join(srcDir, "popup.tsx"),
        options: path.join(srcDir, "options.tsx"),
        background: path.join(srcDir, "background.ts"),
        content_script: path.join(srcDir, "content_scripts", "content_script.ts"),
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