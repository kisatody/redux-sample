import axios, { AxiosRequestHeaders } from "axios";

const request = axios.create({
    baseURL: 'http://xawn.f3322.net:8012',
    timeout: 5000
})

//设置请求拦截
request.interceptors.request.use((config)=>{
    (config.headers as AxiosRequestHeaders)['Content-Type'] = 'application/x-www-form-urlencoded';
    (config.headers as AxiosRequestHeaders).Authentication = "b25e39b47e774b4a05b3cb1555fc377f209457c3fd339d373d3fca7b1ea8be56fdc6ed05b7ffb0700e7300d242fb83b5a7f7a83ef47d1e9fad6b3244f73e801ac2f2c5bb1aee06512deb3d11b9be0e80ea9cbdd85364d1f776080a2aaf043f01e7863921095727531aec27e405724b31bdb815f27afeb61b06f3446d1a9e09b3bfd51d3e3972e7ee"
    return config
})

//响应拦截
request.interceptors.response.use((res)=>res.data)

export default request