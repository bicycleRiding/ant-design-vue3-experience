import { Button, Tag, Divider } from "ant-design-vue"

/**
 * @type {import("vue").Component[]}
 */
const components = [Button, Tag, Divider]

/**
 * @type {import("vue").Plugin}
 */
const componentPlugin = app =>
	components.forEach(app.use, app)

export default componentPlugin
