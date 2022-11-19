const path = require("path");
const postCSSPlugins = [
  "autoprefixer",
  "postcss-import",
  "postcss-nested",
  "postcss-simple-vars",
];

module.exports = {
  devServer: {
    before: function (app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    host: "0.0.0.0",
    hot: true,
    port: 3000,
  },
  entry: "./app/assets/scripts/App.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader?url=false",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
};
