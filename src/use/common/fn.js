/**
 * 防抖
 * @param {function} fn 待执行函数
 * @param {number} wait 间隔
 * @returns {function}
 */
export const debounce = (fn, wait = 500) => {
	let timeout = null
	return (...rest) => {
		clearTimeout(timeout)
		const handleTimeout = fn.bind(null, ...rest)
		timeout = setTimeout(handleTimeout, wait)
	}
}

/**
 * 节流
 * @param {function} fn 待执行函数
 * @param {number} wait 间隔
 */
export const throttle = (fn, wait = 500) => {
	let timeout = null
	return (...rest) => {
		if (!timeout) {
			const handleTimeout = () => {
				fn(...rest)
				clearTimeout(timeout)
			}
			timeout = setTimeout(handleTimeout, wait)
		}
	}
}
