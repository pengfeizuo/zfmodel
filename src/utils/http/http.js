import axios from 'axios'
import router from '@/router'
import {
  MessageBox,
  Message
} from 'element-ui'
import {
  getToken,
  removeToken
} from '@/utils/auth'

const instance = axios.create({
  timeout: 6000,
  baseURL: '/'
})

instance.interceptors.request.use(config => {
  config.headers['client_id'] = 'web'
  config.headers['client_secret'] = 'web'
  config.headers['deviceId'] = 'web'
  // if (getToken()) {
  //   config.headers['Authorization'] = getToken()
  // } else {
  //   config.headers['Authorization'] = 1
  // }
  const token = window.sessionStorage.getItem("Login_token");
  config.headers['token'] = token

  return config
}, error => {
  Promise.reject(error)
})

instance.interceptors.response.use(response => {
  const res = response.data
  // console.log(res,"请求响应")
  
  if (res.code == '402' || res.code == '403' || res.code == '405' || res.code == '500') {
    Message({
      message: response.data.message,
      type: 'warning',
      duration: 3 * 1000
    })
  } else if(res.code == '400' || res.code == '401'){
    Message({
      message: "登出成功",
      type: 'success',
      duration: 3 * 1000
    })
  }else{
    return res
  }
}, error => {
  // 401 query记录当前路由并跳转至登录页
  if (error.response.status === 401) {
    MessageBox.confirm('您已经登录超时，请回首页重新登录', '温馨提示', {
      confirmButtonText: '登录',
      showCancelButton: false,
      closeOnClickModal: false,
      type: 'warning'
    }).then(() => {
      removeToken()
      const {
        fullPath: redirect
      } = router.currentRoute
      router.push({
        name: 'login',
        query: {
          redirect
        }
      })
    }).catch(() => {
      removeToken()
    })
    return
  }
  let data = error.response.data.data
  let msg
  if (data && typeof data == 'string') {
    data = JSON.parse(data) || {}
    msg = data.msg
  }
  Message({
    message: msg || '请求失败',
    type: 'error',
    duration: 3500
  })
})
export default instance
