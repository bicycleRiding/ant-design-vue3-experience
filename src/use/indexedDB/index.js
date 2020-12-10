import { openIndexedDBRequest } from "./db-request"
import { useCreateObjectStore } from "./object-store"

export const useIndexedDB = async (
	databaseName,
	newStoreMap,
	version
) => {
	const request = openIndexedDBRequest(
		databaseName,
		version
	)
	const executor = resolve => {
		const mapToCreateStore = event => {
			const db = event.target.result
			newStoreMap.forEach(useCreateObjectStore(db))
			const transaction = event.target.transaction
			transaction.oncomplete = () => resolve(db)
		}
		const handleSuccess = event => {
			const db = event.target.result
			resolve(db)
		}
		request.onupgradeneeded = mapToCreateStore
		request.onsuccess = handleSuccess
	}
	return new Promise(executor)
}

export {
	showMember,
	createMember,
	updateMember,
	destoryMember
} from "./object-store"
