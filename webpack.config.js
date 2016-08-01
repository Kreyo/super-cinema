
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './public_app/app.js',
    output: {
        path: "./public",
        filename: "package.js"
    },
    module: {
         loaders: 
         [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                   presets: ["es2015", "react"]
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass")
            },
            {
              test: /\.(png|jpg|gif)$/,
              loader: "file-loader?name=img/img-[hash:6].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new CopyWebpackPlugin([
            { from: "assets/img", to: "img" }
        ], {})
    ]
};
