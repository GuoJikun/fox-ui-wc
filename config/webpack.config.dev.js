const baseConf = require("./webpack.config.base.js");
const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const conf = merge(baseConf, {
    mode: "development",
    output: {
        path: resolve(__dirname, "../dist"),
        filename: "ivy-ui.js",
    },
    devtool: "source-map",
    devServer: {
        contentBase: join(__dirname, "../doc"),
        index: "index.html",
        hot: true,
        host: "localhost",
        port: 9000,
    },
    watch: true,
    watchOptions: {
        poll: 1000, // 每秒检查一次变动
        ignored: ["node_modules/**"],
    },
});

module.exports = conf;
