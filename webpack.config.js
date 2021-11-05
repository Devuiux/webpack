const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = (process.env.NODE_ENV === "production")? "production" : "development";

// let mode = "development";

// if (process.env.NODE_ENV === "production") {
//   mode = "production";
// }

module.exports = {
  mode: mode,

  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          }, 
          "css-loader", 
          "postcss-loader", 
          "sass-loader"
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin()
  ],

  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  }
}