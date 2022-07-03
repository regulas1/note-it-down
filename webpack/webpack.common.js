const webpack = require("webpack");

module.exports = {
   optimization: {
      splitChunks: {
         name: "vendor",
         chunks(chunk) {
            return chunk.name !== "background";
         },
      },
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /node_modules/,
         },
      ],
   },
   resolve: {
      extensions: [".ts", ".tsx", ".js"],
   },
};
