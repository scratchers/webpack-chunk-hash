var webpack = require('webpack');
var outdir = __dirname + '/dist';
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: [
            './sass/main.scss',
        ]
    },
    output: {
        path: outdir,
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].[chunkhash:8].css"),
        new HtmlWebpackPlugin({
            template: 'html/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
};
