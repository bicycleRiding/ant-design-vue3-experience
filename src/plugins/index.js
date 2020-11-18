import router from "@/router"
import store from "@/store"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

/**
 * @typedef {import("vue").Plugin[]} Plugins
 *
 * @callback UsePlugin
 * @param {import("vue").App} app
 * @returns {void}
 */

/**
 * @type {Plugins} 插件组
 */
const plugins = [Antd, router, store]

/**
 * @type {UsePlugin} 注册插件
 */
const usePlugins = app => plugins.forEach(app.use, app)

export default usePlugins
