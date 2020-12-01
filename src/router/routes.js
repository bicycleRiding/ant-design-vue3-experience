/**
 * @typedef {import("vue-router").RouteRecordRaw[]} routes
 */

/**
 * @type {routes} 路由表
 */
const routes = [
	{
		name: "首页",
		path: "/",
		component: () => import("@/views/Home.vue")
	},
	{
		name: "日志",
		path: "/blogs",
		component: () => import("@/views/Blogs.vue")
	},
	{
		name: "读书",
		path: "/books",
		component: () => import("@/views/Books.vue")
	}
]

export default routes
