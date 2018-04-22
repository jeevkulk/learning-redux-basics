var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/app.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "app.bundle.js",
        publicPath: "/app"
    },
    devServer: {
        contentBase: SRC_DIR
    },
    module :{
        rules:[
            {
                loader: 'babel-loader',
                options: {
                    presets:['react','es2015',"stage-2"]
                },
                test: /\.js?/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    mode: "development"
};

module.exports = config;