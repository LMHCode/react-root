
import axios from 'axios'
const config = {
	timeout: 60000, // request timeout
	baseURL: process.env.REACT_APP_BASE_URL
}
let service = axios.create(config);
// 添加请求拦截器
service.interceptors.request.use(async config => {
  // 发送请求之前的操作 定义请求头部信息
  return config
}, error => {
  // 对请求错误的操作
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(res => {
  // 请求响应，对响应数据的操作
  return res
}, error => {
  // 对响应错误的操作
  return Promise.reject(error);
})

export default service

export const BASE_API = config.baseURL