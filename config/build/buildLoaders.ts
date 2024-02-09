import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
// без typescript нужно установить babel-loader
// ts-loader умеет в .tsx
    const tsLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return (
        [
            tsLoader,
        ]
    )
}