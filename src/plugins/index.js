import router from "@/router"
import store from "@/store"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

/**
 * @param {import("vue").App} app
 */
const usePlugins = app => {
	/**
	 * @type {import("vue").Plugin}
	 */
	const plugins = [Antd, router, store]
	plugins.forEach(app.use, app)
}

export default usePlugins
