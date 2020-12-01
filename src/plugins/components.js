import {
	Menu,
	Card,
	Pagination,
	Breadcrumb
} from "ant-design-vue"

/**
 * @type {import("vue").Component[]}
 */
const components = [Menu, Card, Pagination, Breadcrumb]

/**
 * @type {import("vue").Plugin}
 */
const componentPlugin = app =>
	components.forEach(app.use, app)

export default componentPlugin
