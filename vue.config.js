const speed = require("speed-measure-webpack-plugin")
const hard = require("hard-source-webpack-plugin")
const isDev = process.env.NODE_ENV === "development"

module.exports = {
	publicPath: "./", // 如此配置将会使引入的资源路径都为相对路径
	configureWebpack: {
		plugins: isDev
			? [new speed(), new hard()]
			: [new speed()]
	}
}
