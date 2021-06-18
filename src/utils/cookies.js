const token = ""

/**
 * @author 小周
 * @param { token } value 
 * @description 存储token
 */
export function setToken (value) {
  localStorage.setItem('j_token',value)
}

/**
 * @author 小周
 * @param { token } value 
 * @description 获取token
 */
export function getToken () {
  localStorage.getItem('j_token')
}

/**
 * @author 小周
 * @param { token } value 
 * @description 删除token
 */
export function removeToken () {
  localStorage.removeItem('j_token')
}

