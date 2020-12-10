export const useCreateObjectStore = db => (
	keyPath,
	storeName
) => {
	if (!db.objectStoreNames.contains(storeName)) {
		db.createObjectStore(storeName, {
			keyPath: keyPath
		})
	}
}

export const useObjectStore = (db, storeName) => {
	const objectStore = db
		.transaction([storeName], "readwrite")
		.objectStore(storeName)
	return objectStore
}

export const showMember = (db, storeName, keyPath) => {
	const objectStore = useObjectStore(db, storeName)
	const request = objectStore.get(keyPath)
	return new Promise((resolve, reject) => {
		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject("读取数据失败")
	})
}

export const createMember = (
	db,
	storeName,
	payload = {}
) => {
	const objectStore = useObjectStore(db, storeName)
	const request = objectStore.add(payload)
	return new Promise((resolve, reject) => {
		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject("创建数据失败")
	})
}

export const updateMember = (
	db,
	storeName,
	payload = {}
) => {
	const objectStore = useObjectStore(db, storeName)
	const request = objectStore.put(payload)
	return new Promise((resolve, reject) => {
		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject("更新数据失败")
	})
}

export const destoryMember = (db, storeName, keyPath) => {
	const objectStore = useObjectStore(db, storeName)
	const request = objectStore.delte(keyPath)
	return new Promise((resolve, reject) => {
		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject("删除数据失败")
	})
}
