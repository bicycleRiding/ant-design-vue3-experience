import { notification } from "ant-design-vue"

export const useDraftNotification = (
	type,
	description,
	duration = 2
) => () =>
	notification[type]({
		message: "草稿",
		description,
		duration
	})

export const usePublishNotification = (
	type,
	description,
	duration = 2
) => () =>
	notification[type]({
		message: "发布文章",
		description,
		duration
	})
