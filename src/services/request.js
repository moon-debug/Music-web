import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => { 
  return config
}, err => {

})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = "请求错误";
        console.log(err.message);
        break;
      case 401:
        err.message = "未授权访问";
        break;
      default:
        console.log();
    }
  }
  return err;
})

export default instance