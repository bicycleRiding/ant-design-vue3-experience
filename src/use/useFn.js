/**
 * 防抖
 * @description 多次触发只执行最后一次
 * @param {function} fn 待执行函数
 * @param {number} delay 延迟/ms
 */
export const debounce = (fn, delay) => {
	let timer = null
	return (...rest) => {
		clearTimeout(timer)
		timer = setTimeout(fn.bind(null, ...rest), delay)
	}
}

/**
 * 节流
 * @description 多次触发只执行最初一次
 * @param {function} fn 待执行函数
 * @param {number} delay 延迟/ms
 */
export const throttle = (fn, delay) => {
	let prev = Date.now()
	return (...rest) => {
		const now = Date.now()
		if (now - prev >= delay) {
			fn(...rest)
			prev = Date.now()
		}
	}
}
