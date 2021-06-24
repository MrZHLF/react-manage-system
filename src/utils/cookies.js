const token = 'ms_username'

/**
 * @author 小周
 * @param { token } value 
 * @description 存储token
 */
export function setToken (value) {
  window.localStorage.setItem(token,value)
}

/**
 * @author 小周
 * @param { token } value 
 * @description 获取token
 */
export function getToken () {
  window.localStorage.getItem(token)
}

/**
 * @author 小周
 * @param { token } value 
 * @description 删除token
 */
export function removeToken () {
  window.localStorage.removeItem(token)
}

