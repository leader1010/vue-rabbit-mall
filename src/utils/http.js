// axios基础配置
import axios from "axios";

const httpInstance = axios.create({
    baseURL: "",
    timeout: 5000
})
// 拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))


httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default httpInstance



