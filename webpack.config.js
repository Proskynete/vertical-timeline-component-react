var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
        {
            test: /\.(sass|scss)$/,
            exclude: /(node_modules|bower_components)/,
            loaders: [
                { loader: 'style-loader' },
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true, sourceMapContents: true } },
            ],
        },
        {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /(node_modules|bower_components|build)/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env'],
            }
        }]
    },
    externals: {
        'react': 'commonjs react'
    }
};