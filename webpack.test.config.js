var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: [
        // może trza tu zaciągną polyfille i inne bzdety?
        // sprobowac zaciągac moche, enzyme i inne per plik a nie definiować globalne
        //'webpack-dev-server/client?http://localhost:8080',
        //'webpack/hot/only-dev-server',
        //'babel-polyfill',
        'mocha!./test/index.js'
    ],
    output: {
        filename: 'test.build.js',
        path: 'test/',
        publicPath: 'test/'
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx$/,
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
                test: /(\.jpg|\.jpeg|\.png|\.gif|\.json)$/,
                loader: 'null-loader'
            }
        ]
    },
    resolve: {
        root: ROOT_PATH,
        extensions: ['', '.js', '.jsx'],
        alias: {
            config: path.join(ROOT_PATH, 'src/app/config/config.production'),
            action: path.join(ROOT_PATH, 'src/app/action'),
            store: path.join(ROOT_PATH, 'src/app/store/store.production')
        }
    },
    externals: {
        "jsdom": "window",
        "cheerio": "window",
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
    },
    devServer: {
        host: 'localhost',
        port: '85'
    }
};