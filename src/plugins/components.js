import {
	Menu,
	Card,
	Pagination,
	Breadcrumb,
	Button,
	Modal,
	Form,
	Input,
	Radio,
	Drawer,
	Popover
} from "ant-design-vue"

/**
 * @type {import("vue").Component[]}
 */
const components = [
	Menu,
	Card,
	Pagination,
	Breadcrumb,
	Button,
	Modal,
	Form,
	Input,
	Radio,
	Drawer,
	Popover
]

/**
 * @type {import("vue").Plugin}
 */
const componentPlugin = app =>
	components.forEach(app.use, app)

export default componentPlugin
