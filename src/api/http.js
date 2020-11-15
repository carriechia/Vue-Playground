import axios from 'axios';
import routers from '../routes/routes';

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://18.190.3.152/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// http request 攔截器
axios.interceptors.request.use(
  config => {
    if (typeof localStorage.token !== 'undefined') {
      config.headers.Authorization = 'Bearer ' + localStorage.token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 攔截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
            case 402: // 登入失敗或帳號密碼錯誤
            case 405:
            case 403: //token error
            case 404:
            //清除token
		    localStorage.removeItem('token')
		    //重新登入
		    routers.push('/login')
            break;
        }
    }
    return Promise.reject(error.response)
  }
);
export default axios;