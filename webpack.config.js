const webpack = require('webpack');

module.exports = {
    debug: 'true',
    devtool: 'source-map',
    target: 'web',
    cache: true,
    entry: {
        common: ['immutable', 'react', 'react-dom', 'redux', 'react-redux', 'redux-immutable', 'redux-thunk'],
        client: './src/client.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    output: {
        path: `${__dirname}/javascripts`,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
};
