import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
// без typescript нужно установить babel-loader
// ts-loader умеет в .tsx
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\./g,
                        localIdentName: isDev ? '[path][name]_[local]_[hash:base64:5]' : '[hash:base64:8]',
                    },
                }
            },
            "sass-loader",
        ],
    }

    return (
        [
            tsLoader,
            cssLoaders,
        ]
    )
}