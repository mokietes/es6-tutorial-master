import { resolve } from "path";
// eslint-disable-next-line no-unused-vars
import webpack from "webpack";

export const entry = "./js/main.js";
export const output = {
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, "build"),
  filename: "main.bundle.js",
};
export const module = {
  loaders: [
    {
      test: /\.js$/,
      loader: "babel-loader",
      query: {
        presets: ["es2015"],
      },
    },
  ],
};
export const stats = {
  colors: true,
};
export const devtool = "source-map";
