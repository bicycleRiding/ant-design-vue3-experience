const hardPlugin = require("hard-source-webpack-plugin")
const { resolve } = require("path")
module.exports = {
	publicPath: "./", // 如此配置将会使引入的资源路径都为相对路径

	configureWebpack: {
		plugins: [
			new hardPlugin({
				cacheDirectory: resolve(__dirname, "cache")
			})
		],
		resolve: {
			alias: {
				"c@": resolve(__dirname, "src/components"),
				"v@": resolve(__dirname, "src/views"),
				"u@": resolve(__dirname, "src/use")
			}
		}
	}
}
