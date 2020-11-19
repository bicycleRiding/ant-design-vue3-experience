import { useRouter } from "vue-router"

export const useKeysToPage = () => {
	const router = useRouter()
	return keys => {
		const routeName = keys[0]
		router.push({
			name: routeName
		})
	}
}
