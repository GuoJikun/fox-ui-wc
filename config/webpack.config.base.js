const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { join } = require("path");

const config = {
    target: ["web"],
    entry: join(__dirname, "../src/index.js"),
    plugins: [new CleanWebpackPlugin()],
};

module.exports = config;
