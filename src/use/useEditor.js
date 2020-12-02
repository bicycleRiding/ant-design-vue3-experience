import { onMounted, onUnmounted } from "vue"
import xss from "xss"
import E from "wangeditor"
import { debounce } from "@/use/useFn.js"
import { notification } from "ant-design-vue"

export const useEditor = () => {
	let editor = null
	let debounceFn = null
	let safeHtml = ""
	onMounted(() => {
		editor = new E("#editor")
		editor.config.height = 400
		editor.config.zIndex = 1
		debounceFn = debounce(html => {
			safeHtml = xss(html)
			if (safeHtml) {
				notification.info({
					message: "草稿",
					description: "已保存本地",
					duration: 2
				})
			}
			safeHtml
		}, 5000)
		editor.config.onchange = debounceFn
		editor.config.onchangeTimeout = 500
		editor.create()
	})
	onUnmounted(() => editor.destroy())
}
