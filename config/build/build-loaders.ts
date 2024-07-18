import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const IsDev = options.mode === "development";

  return [
    {
      test: /\.(s[ac]ss|css)$/i,
      use: [
        IsDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: IsDev
                ? "[path][name]__[local]"
                : "[hash:base64:8]",
            },
          },
        },
        "sass-loader",
      ],
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [IsDev && ReactRefreshTypeScript()].filter(Boolean),
            }),
          },
        },
      ],
      exclude: /node_modules/,
    },
  ];
}

//Как вариант
//'[name]__[local]--[hash:base64:5]'
