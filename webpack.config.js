var path = require('path'),
    CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    output: {
        libraryTarget: 'amd',
        path: './dist',
        filename: '[name]-compiled.js',
        sourcePrefix: '    '
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        root: './src'
    },

    module: {
        loaders: [
            { test: /\x?$/, loader: 'ts-loader' }
        ]
    },

    entry: {
        e1: './src/entry-dog.ts',
        e2: './src/entry-person.ts'
    },

    plugins: [
        new CommonsChunkPlugin('commons.chunk.js')
    ]
};