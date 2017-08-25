const path = require('path');
const webpack = require("webpack")
const plugins = require('./webpack.config.base').plugins
const env = process.env || 'dev';
const isProd = env === 'prod';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log(process.env.NODE_ENV)
const config = () => ({
    context: path.resolve('src'),
    entry: {
        bundle: ["./js/app.jsx"],
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'redux-saga',
            'lodash',
            'prop-types',
            'react-loader',
            'react-router-dom'
        ]
    },
    output: {
        path: path.resolve('build/'),
        publicPath: '/',
        filename: "[name].[hash].js",
        //chunkFilename: '[name].[chunkhash].js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'src','html'),
        hot: true,
        inline: true
    },
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [{
            test: [/\.js$/, /\.jsx$/],
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            enforce: 'pre',
            test: [/\.js$/],
            exclude: /(node_modules)/,
            loader: 'eslint-loader'
        },
        {
            test: /\.css$/,
            exclude: /(node_modules)/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                //resolve-url-loader may be chained before sass-loader if necessary
                use: 'css-loader'
            })
        }, {
            test: /\.less$/,
            exclude: /(node_modules)/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                //resolve-url-loader may be chained before less-loader if necessary
                use: ['css-loader', 'less-loader']
            })
        },
        {
            test: /\.(png|jpg|gif|json)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.es6']
    },
    plugins: plugins,
})
if (isProd) {
    config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 'webpack/hot/only-dev-server');
}


module.exports = config



