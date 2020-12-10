import { useRouter } from "vue-router"

/**
 * 路由跳转
 * @returns {(routeName:string) => void} 跳转函数
 */
export const useToPage = () => {
	const router = useRouter()
	return routeName => router.push({ name: routeName })
}
