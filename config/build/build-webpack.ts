import webpack from "webpack";
import { buildDevServer } from "./build-devServer";
import { buildLoaders } from "./build-loaders";
import { buildPlugins } from "./build-plugins";
import { buildResolvers } from "./build-resolvers";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const IsDev = options.mode === "development";
  const IsProd = options.mode === "production";

  return {
    mode: options.mode ?? "development",
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: IsDev && "eval-source-map",
    devServer: IsDev ? buildDevServer(options) : undefined,
  };
}
