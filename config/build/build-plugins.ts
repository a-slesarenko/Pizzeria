import path from "path";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const IsProd = options.mode === "production";
  const IsDev = options.mode === "development";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: path.resolve(options.paths.public, "favicon.ico"),
    }),
  ];

  if (IsDev) {
    // Выносит проверку типов в отдельный процесс, ускоряя саму сборку
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (IsProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(options.paths.public, "translate"),
            to: path.resolve(options.paths.output, "translate"),
          },
          // Добавлять еще:
          // { from: "other", to: "public" },
        ],
      })
    );
  }

  if (options.analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
