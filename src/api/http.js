import axios from 'axios';
import routers from '../routes/routes';

// http request 攔截器
axios.interceptors.request.use(
  config => {
    if (typeof(localStorage.token) !== 'undefined') { //判断token是否存在
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