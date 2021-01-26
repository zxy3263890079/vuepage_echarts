// import ajax from './ajax.js'

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

export const reqLogin = () => ajax.get('/command/Login?timestamp=1593506846905&appid%3D%26usercode%3Dadmin%40ngs%26password%3D888888&postdata=null')

export const reqhomeiconList = (userid, comid) => ajax.get(`/szyapi/v1/ApiCommand/c29_getUserAppList?comid=${comid}&portalid=1c255696_b4db_4b68_bf41_096eefc7ce12&userid=${userid}`)

export const reqinfoList = (userid, comid) => ajax.get(`/szyapi/v1/ApiCommand/c29_getUserToDoList?comid=${comid}&portalid=1c255696_b4db_4b68_bf41_096eefc7ce12&userid=${userid}`)

export const reqwarninglist = (userid, comid) => ajax.get(`/szyapi/v1/ApiCommand/c29_getUserWarnList?comid=${comid}&portalid=1c255696_b4db_4b68_bf41_096eefc7ce12&userid=${userid}`)

export const reqechartsList = (projectid, userid, comid) => ajax.get(`/szyapi/v1/ApiCommand/c29_getUserChartList?comid=${comid}&projectid=${projectid}&portalid=1c255696_b4db_4b68_bf41_096eefc7ce12&userid=${userid}`)

export const reqaWeekStatistics = (comid, projectid, userid) => ajax.get(`/szyapi/v1/ApiCommand/c29_getUserChartList_KFXCX?comid=${comid}&projectid=${projectid}&userid=${userid}&portalid=w_0828309f_7118_4e82_a802_1fe637a4bbe7`)

export const reqNewProjectList = (comid, projectid, userid) => ajax.get(`/szyapi/v1/ApiCommand/c29_getNewProjectList?comid=${comid}&projectid=${projectid}&userid=${userid}&num=20`)

export const reqBusiOppInfo = (comid, projectid, userid) => ajax.get(`/szyapi/v1/ApiCommand/c29_getBusiOppInfo?comid=${comid}&projectid=${projectid}&userid=${userid}&num=20`)

export const requserapplist = (comid, projectid, userid) => ajax.get(`/szyapi/v1/ApiCommand/c29_getUserAppList_KFXCX?comid=${comid}&projectid=${projectid}&userid=${userid}&portalid=w_0828309f_7118_4e82_a802_1fe637a4bbe7`)
