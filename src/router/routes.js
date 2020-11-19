/**
 * @typedef {import("vue-router").RouteRecordRaw[]} routes
 */

/**
 * @type {routes} 路由表
 */
const routes = [
	{
		path: "/",
		redirect: "/home"
	},
	{
		path: "/home",
		redirect: "/home/life",
		component: () => import("@/views/Home/Home.vue"),
		children: [
			{
				path: "life",
				name: "life",
				component: () =>
					import("@/views/Home/sub-views/Life.vue")
			},
			{
				path: "about",
				name: "about",
				component: () =>
					import("@/views/Home/sub-views/About.vue")
			}
		]
	}
]

export default routes
