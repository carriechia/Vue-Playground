import axios from 'axios';
import router from '../routes/routes';

// axios 配置
// axios.defaults.timeout = 8000;
// axios.defaults.baseURL = 'http://18.190.3.152/';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//跨域请求设置
// axios.defaults.withCredentials = true
// axios.defaults.crossDomain = true

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.get('/token').then(res => {
//     console.log(res)
//     axios.defaults.headers.common['X-CSRF-TOKEN'] = res.data;
//     axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// });



// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.token) { //判断token是否存在
      config.headers.Authorization = localStorage.token;  //将token设置成请求头
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errno === 999) {
      router.replace('/');
      console.log("token过期");
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;