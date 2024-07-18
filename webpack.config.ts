import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildWebpack } from "./config/build/build-webpack";
import { BuildPaths, Mode } from "./config/build/types/types";

interface EnvironmentVariables {
  mode: Mode;
  port: number;
  analyzer?: boolean;
}

export default (env: EnvironmentVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    paths: paths,
    mode: env.mode ?? "development",
    analyzer: env.analyzer,
  });

  return config;
};
