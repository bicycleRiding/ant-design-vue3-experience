import {
	Button,
	Tag,
	Divider,
	Menu,
	Switch,
	Card,
	Row,
	Col,
	BackTop
} from "ant-design-vue"

/**
 * @type {import("vue").Component[]}
 */
const components = [
	Button,
	Tag,
	Divider,
	Menu,
	Switch,
	Card,
	Row,
	Col,
	BackTop
]

/**
 * @type {import("vue").Plugin}
 */
const componentPlugin = app =>
	components.forEach(app.use, app)

export default componentPlugin
