import useNotice from "u@/common/notice"
let request = null

const noticeIDBOpenSuccess = useNotice(
	"success",
	"indexedDB",
	"开启成功"
)

const noticeIDBOpenFail = useNotice(
	"error",
	"indexedDB",
	"开启失败"
)

const noticeIDBOpenUpgradeneeded = useNotice(
	"info",
	"indexedDB",
	"数据库升级"
)

/**
 * 开启数据库
 */
export const openIndexedDBRequest = (
	databaseName,
	version = 1
) => {
	if (typeof databaseName !== "string")
		throw new Error("databaseName 必须是一个字符串")

	request = window.indexedDB.open(databaseName, version)

	request.addEventListener("success", noticeIDBOpenSuccess)
	request.addEventListener("error", noticeIDBOpenFail)
	request.addEventListener(
		"upgradeneeded",
		noticeIDBOpenUpgradeneeded
	)

	return request
}

/**
 * 销毁数据库实例
 */
export const closeIndexedDBRequest = () => {
	request.removeEventListener(
		"success",
		noticeIDBOpenSuccess
	)
	request.removeEventListener("error", noticeIDBOpenFail)
	request.removeEventListener(
		"upgradeneeded",
		noticeIDBOpenUpgradeneeded
	)
	request = null
}
