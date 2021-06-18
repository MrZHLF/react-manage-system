import service from '@utils/request.js'


/**
 * @author 小周
 * @param { userName,password } data
 * @description 登录接口
 */
export function Login (data) {
  return service.request({
    url: "/login",
    method: "post",
    data
  })
}