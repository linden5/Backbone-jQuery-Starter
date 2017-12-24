const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var contextPath = path.resolve(__dirname, '../');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['./dist'], {
            root: contextPath
        }),
        new HtmlWebpackPlugin({
            title: 'Backbone starter',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Backbone: 'backbone',
            _: 'underscore'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            outputPath: 'image/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.art$/,
                use: 'art-template-loader'
            }
        ]
    }
};