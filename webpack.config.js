const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const {
    buildDir,
    buildImagesDir,
    sourceEntry,
    sourceImagesDir
} = require('./config');

module.exports = {  
    entry: [ sourceEntry ],
    output: {
        path: buildDir,
        filename: 'build.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),
            excludeChunks: ['base'],
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new CopyWebpackPlugin([{ from: sourceImagesDir, to: buildImagesDir }]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'image-webpack-loader',
                query: {
                    mozjpeg: {
                        progressive: true,
                    },
                    gifsicle: {
                        interlaced: true,
                    },
                    optipng: {
                        optimizationLevel: 7,
                    }
                }
            }
        ]
    },
};