var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015','react']
                }
            },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.pug$/, loader: 'pug'},
            { test: /\.json$/, loader: 'json'},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

            // { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=dist/fonts/[name].[ext]' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'helloWorld',
        loader: 'pug',
        template: './src/index.pug'
    })]
};
