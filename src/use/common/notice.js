import { notification } from "ant-design-vue"

const useNotice = (type, message, desc) => {
	return () =>
		notification[type]({
			message,
			description: desc,
			duration: 2
		})
}

export default useNotice
