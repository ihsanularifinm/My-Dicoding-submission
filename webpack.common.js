const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				exclude: /styles/,
				use: ["to-string-loader", "css-loader"],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: ["file-loader?name=assets/images/[name].[ext]", "image-webpack-loader?bypassOnDebug"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: "./src/assets/img/ResepLogo.png",
			template: "./src/index.html",
			filename: "index.html",
			minify: "production",
		}),
	],
};
