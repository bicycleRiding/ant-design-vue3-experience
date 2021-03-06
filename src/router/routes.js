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
		component: () => import("v@/Home.vue")
	},
	{
		name: "日志",
		path: "/blogs",
		component: () => import("v@/Blogs.vue")
	},
	{
		name: "读书",
		path: "/books",
		component: () => import("v@/Books.vue")
	},
	{
		name: "编辑",
		path: "/editor",
		component: () => import("v@/Editor.vue")
	},
	{
		path: "/:pathMatch(.*)",
		name: "无此资源",
		component: () => import("v@/NotFound.vue")
	}
]

export default routes
