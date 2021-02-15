const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
    entry: { app: "./src/index.tsx" },
    mode: "development",
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    name: "vendor",
                },
            },
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "[name].js",
        chunkFilename: "[name].[chunkhash].js",
        publicPath: "http://localhost:8080/",
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
            },
        ],
    },

    devServer: {
        contentBase: __dirname + "/dist",
        compress: true,
        port: 8080,
        historyApiFallback: true,
        hot: true,
    },
};
