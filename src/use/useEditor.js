import { onMounted, onUnmounted } from "vue"
import xss from "xss"
import E from "wangeditor"
import { debounce } from "@/use/useFn.js"
import { useDraftNotification } from "@/use/useNotification.js"
import {
	draftIDBadd,
	draftIDBread,
	draftIDBupdate
} from "./useIndexedDB"

export const useEditor = (type = "blog", introduce) => {
	const { name = "common" } = introduce || {}
	let editor = new E("#editor")
	let debounceFn = null
	let safeHtml = ""
	onMounted(() => {
		debounceFn = debounce(html => {
			safeHtml = xss(html)
			const readReq = draftIDBread(type, name)
			readReq.onsuccess = () => {
				if (!readReq.result) {
					const addReq = draftIDBadd(type, {
						name,
						safeHtml
					})
					addReq.onsuccess = useDraftNotification(
						"info",
						"新建并保存到本地"
					)
					addReq.onerror = useDraftNotification(
						"error",
						"保存失败"
					)
				} else {
					const updateReq = draftIDBupdate(type, {
						name,
						safeHtml
					})
					updateReq.onsuccess = useDraftNotification(
						"info",
						"更新并保存到本地"
					)
					updateReq.onerror = useDraftNotification(
						"error",
						"保存失败"
					)
				}
			}

			readReq.onerror = useDraftNotification(
				"error",
				`读取${type}里的${name}失败`
			)
		}, 4000)
		editor.config.onchange = debounceFn
		editor.config.onchangeTimeout = 500
		editor.config.height = 380
		editor.config.zIndex = 1
		editor.create()
	})
	onUnmounted(() => editor.destroy())
	return editor
}
