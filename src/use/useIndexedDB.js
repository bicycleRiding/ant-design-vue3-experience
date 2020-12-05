import { notification } from "ant-design-vue"

const IDBRequest = window.indexedDB.open("drafts", 1)
let db = null

const notificationIndexDB = (type, des, duration = 2) => {
	notification[type]({
		message: "IndexDB",
		description: des,
		duration
	})
}

/** 错误事件 */
IDBRequest.onerror = () =>
	notificationIndexDB("error", "开启错误")

/** 成功事件 */
IDBRequest.onsuccess = event => {
	db = event.target.result
	notificationIndexDB("success", "开启成功")
}

/** 版本更新事件 */
IDBRequest.onupgradeneeded = event => {
	db = event.target.result
	if (!db.objectStoreNames.contains("blog")) {
		db.createObjectStore("blog", {
			keyPath: "name"
		})
	}
	if (!db.objectStoreNames.contains("book")) {
		db.createObjectStore("book", {
			keyPath: "name"
		})
	}
}

const getObejctStore = type => {
	const transaction = db.transaction([type], "readwrite")
	const objectStore = transaction.objectStore(type)
	return objectStore
}

export const draftIDBadd = (type, data) => {
	const objectStore = getObejctStore(type)
	const request = objectStore.add(data)
	return request
}

export const draftIDBdelete = (type, data) => {
	const objectStore = getObejctStore(type)
	const request = objectStore.delete(data)
	return request
}

export const draftIDBupdate = (type, data) => {
	const objectStore = getObejctStore(type)
	const request = objectStore.put(data)
	return request
}

export const draftIDBread = (type, primaryKey) => {
	const objectStore = getObejctStore(type)
	const request = objectStore.get(primaryKey)
	return request
}
