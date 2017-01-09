const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const config = {
    entry: ['babel-polyfill','./index.js'],
    output: {
        filename: 'bundle.js',
        publicPath: "dist/",

    },
     module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                  loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url',
                    'less'
                ]
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=images/[hash].[ext]'
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('public/stylesheet.css', {
            allChunks: true
        })
    ]
};
module.exports = config;