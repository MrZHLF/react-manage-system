import axios from 'axios'
import { message } from 'antd'

const service = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout:5000,
})

// 请求拦截
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})


// 响应拦截
service.interceptors.response.use((response) => {
  const data = response.data
  if (data.code !== 200) {
    // 全局错误拦截
    message.info(data.message)
    return  Promise.reject(response)
  } else {
    return response
  }
}, (error) => {
  return Promise.reject(error)
})

export default service