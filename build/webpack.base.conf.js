const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    src: path.join(__dirname,'../src'),
    dist: path.join(__dirname,'../dist'),
    assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/pages`
const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith('.pug'))

module.exports={
    externals: {
        paths: PATHS
    },
    entry:{
        app: PATHS.src,
        // basket: `${PATHS.src}/basket.js`,
    },
    output:{
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    optimization:{
        minimize: false,
        splitChunks:{
            cacheGroups:{
                vendor:{
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module:{
        rules:[{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test: /\.pug$/,
            loader: 'pug-loader',
            query: {
                pretty: true
            }
        },{
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        },{
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        },{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }

                },{
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: 'src/js/postcss.config.js'
                        }
                    }
                }
            ]
        },{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },{
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                },{
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: 'src/js/postcss.config.js'
                        }
                    }
                }
            ]
        }]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[contenthash].css`
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${PATHS.src}/img`, to: `${PATHS.assets}img`,
                },
                {
                    from: `${PATHS.src}/static`, to: ''
                },
                {
                    from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts`,
                }
            ]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery':'jquery'
        }),
        ...PAGES.map(
            page =>
                new HtmlWebpackPlugin({
                    template: `${PAGES_DIR}/${page}`,
                    filename: `./${page.replace(/\.pug/,'.html')}`,
                    inject: false,
                    minify: false
                })
        )
    ]
}
