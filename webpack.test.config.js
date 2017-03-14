var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: 'mocha!./src/index.jsx',
    output: {
        filename: 'test.build.js',
        path: 'tests/',
        publicPath: '/tests'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
            {
                test: /(\.css|\.less)$/,
                loader: 'null-loader',
                exclude: [
                    /build/
                ]
            },
            {
                test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
                loader: 'null-loader'
            }
        ]
    },
    resolve: {
        root: ROOT_PATH,
        extensions: ['', '.js', '.jsx'],
        alias: {
            config: path.join(ROOT_PATH, 'src/app/config/config.development'),
            action: path.join(ROOT_PATH, 'src/app/action'),
            store: path.join(ROOT_PATH, 'src/app/store/store.development')
        }
    },
    devServer: {
        host: 'localhost',
        port: '85   '
    }
};