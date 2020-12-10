import { onMounted, onUnmounted } from "vue"
import wangeditor from "wangeditor"

const useEditor = (domID = "#editor") => {
	const editor = new wangeditor(domID)
	editor.config.height = 380
	editor.config.zIndex = 1

	onMounted(() => editor.create())
	onUnmounted(() => editor.destroy())
	return editor
}

export default useEditor
