import axios from 'axios'

// 获取开发环境中 vue.config.js中的proxy中的target
const BASEURL =  process.env.NODE_ENV === 'production' ? 'dist' : '/devApi';
// 创建axios
const service = axios.create({
  // 请求基础地址
  baseURL: BASEURL,  // http://localhost:8080/devApi/  == http://www.web-jshtml.cn/productapi
  // 请求超时
  timeout: 1000,
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service;