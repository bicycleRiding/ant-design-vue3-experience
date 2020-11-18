/**
 * @typedef {import("vue-router").RouteRecordRaw[]} routes
 */

/**
 * @type {routes} 路由表
 */
const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue")
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/views/About.vue")
	}
]

export default routes
