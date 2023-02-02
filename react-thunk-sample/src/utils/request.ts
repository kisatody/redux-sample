import axios, { AxiosRequestHeaders } from "axios";

const request = axios.create({
    baseURL: 'http://xawn.f3322.net:8012',
    timeout: 5000
})

//设置请求拦截
request.interceptors.request.use((config)=>{
    (config.headers as AxiosRequestHeaders)['Content-Type'] = 'application/x-www-form-urlencoded';
    (config.headers as AxiosRequestHeaders).Authentication = "b25e39b47e774b4a05b3cb1555fc377f209457c3fd339d373d3fca7b1ea8be56fdc6ed05b7ffb0700e7300d242fb83b59d18a38239191fd11a533b0f94666087c2f2c5bb1aee06512deb3d11b9be0e80ea9cbdd85364d1f7bca0a03d4a4eb8d588098a161545144942ed0405269b102f8b0c0e7e550b05ff446eb42f6b5d9c0bb0050bb8785244d6"
    return config
})

//响应拦截
request.interceptors.response.use((res)=>res.data)

export default request