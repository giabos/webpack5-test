const path = require('path')


const rules = [
    { 
        test: /\.js$/, 
        resolve: {fullySpecified: false},
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
