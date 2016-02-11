var path = require('path'),
    CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    output: {
        libraryTarget: 'amd',
        path: './dist',
        filename: '[name]-compiled.js',
        sourcePrefix: '    '
    },

    // Currently we need to add '.js' to resolve.extensions array. 
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js'],
        root: './dist'
    },

    entry: {
        e1: 'entry-dog.js',
        e2: 'entry-person.js'
    },

    plugins: [
        new CommonsChunkPlugin('commons.chunk.js')
    ]
};