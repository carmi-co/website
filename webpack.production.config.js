const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

const config = {
    debug: true,
    devtool: 'source-map',
    entry: ['babel-polyfill','./index.js'],
    output: {
        filename: 'bundle.js',
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist"),

    },
     module: {
        loaders: [
            {
                test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|)$/,
                loader: "url-loader?limit=10000&name=img/img-[hash:6].[ext]"
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            }
        ],
},
    plugins: [
        new ExtractTextPlugin('stylesheet.css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ]
};
module.exports = config;