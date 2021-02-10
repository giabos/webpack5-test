const path = require('path')


const rules = [
    { 
        test: /\.js$/, 
        // https://github.com/webpack/webpack/issues/11467
        resolve: {fullySpecified: false},
    },
    { 
        test: /\.scss$/, 
        use: [
            "raw-loader",
            "sass-loader",
        ],
    },
];

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: { rules },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
};
