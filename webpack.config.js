const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/js/app.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Demo',
            filename: 'index.html',
            template: './src/template.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};