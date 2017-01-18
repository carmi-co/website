const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var isDevelopment = process.argv.indexOf('--development') !== -1;

const config = {
    entry: [
            'react-hot-loader',
            'webpack-hot-middleware/client?reload=true',
            'webpack/hot/only-dev-server',
            'babel-polyfill',
            './index.js'
        ],
    debug: true,
    devTool: 'inline-source-map',
    target: 'web',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/',
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
                test: /\.(png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=images/[hash].[ext]'
            },
            {
                test: /\.ttf$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=fonts/[hash].[ext]'
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('public/stylesheet.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: { 
                        removeComments: !isDevelopment,
                        collapseWhitespace: !isDevelopment
                    },
            inject: true
        })
    ]
};
module.exports = config;