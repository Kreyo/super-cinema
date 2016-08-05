/* Webpack configuration for client code

    Builds client code in public folder from the source
    code in public_app folder

*/

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
                // Allows SASS file includes in component files
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass")
            },
            {
                // Allows image file include in component files
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=img/img-[hash:6].[ext]"
            }
        ]
    },
    plugins: [
        // Combines all SASS files in one style.css
        new ExtractTextPlugin("style.css"),
        // Copies assets to public folder
        new CopyWebpackPlugin([
            { from: "assets/img", to: "img" },
            { from: "assets/html" }
        ], {})
    ]
};
