const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: baseWebpackConfig.externals.paths.dist,
        host: '192.168.88.19',
        port: 8083,
        overlay: {
            warnings: false,
            errors: false
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve,reject) => {
    resolve(devWebpackConfig)
})
