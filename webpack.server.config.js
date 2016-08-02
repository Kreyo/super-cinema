var fs = require('fs');

// Making a list of node_modules ot exclude from webpack transforms
// Excluding all binaries and transforming rest
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
    entry: './server_app/app.js',
    target: "node",
    externals: nodeModules,
    output: {
        path: "./server",
        filename: "server.js"
    },
    module: {
         loaders: 
         [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                   presets: ["es2015"]
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};
