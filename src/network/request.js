import axios from "axios"

export function request(config) {
  // 1. 创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2. 请求拦截
  instance.interceptors.request.use(config => {
    // 请求拦截到的是一些配置信息
    return config  // 拦截到处理完之后要返回
  }, err => {

  })

  instance.interceptors.response.use(res => {
    // 响应成功拦截到的是一些数据
    return res.data
  }, err => {
    console.log(err);
  })

  // 3. 发送真正的网络请求
  return instance(config)
}