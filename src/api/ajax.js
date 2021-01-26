import axios from 'axios'

axios.defaults.headers.common['Cache-Control'] = 'public max-age=999'
const ajax = axios.create({
    // baseURL: '/command',
    timeOut: 10000
})
ajax.interceptors.request.use(config => {
    // console.log(config)
    // config.headers.common['Cache-Control'] = 'public'
    // config.headers.Authorization = '90245063-B51A-4CDE-BA8E-0BB7F55C562D'
    // 身份认证
    // console.log(config)
    // config.headers['Cache-Control'] = 'no-cache max-age=0'
    return config
})
ajax.interceptors.response.use(config => {
    return config
})
export default ajax
