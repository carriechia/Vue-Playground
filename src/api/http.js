import axios from 'axios';
import router from '../router/index';
import {tip,toLogin,to403Page} from './utils.js';
import store from '../../store';

const errorHandler = (status, msg) => {
    if (status === 400) {
        tip(msg);
        return;
    }

    if (status === 401) {
        if (router.currentRoute === "login") {

        } else {
            store.dispatch('auth/setAuth', {
                "token":'',
                "isLogin": false
            })
            console.log(msg);
            setTimeout(() => {
                isLogin();
            }, 1000)
            return;
        }
    }

    if (status === 403) {
        to403Page();
        return;
    }

    if (status === 404) {
        console.log();
        return;
    }
}

var instance = axios.create({
    baseUrl: '/api/'
})

// request 攔截器
instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((config) => {
    const token = store.status.auth.token
    token && (config.headers.Authorization = 'Bearer ' + token);
    return config;
}, (error) => {
    const { response } = error;
    if (response) {
        errorHandler(response.status, response.data.error);
        return Promise.reject(error);
    } else {
        if (!window.navigator.onLine) {
            tip("XXX");
        } else {
            return Promise.reject(error);
        }
    }
});


export default function(method, url, data=null) {
    method = method.toLowerCase();
    if (method === "post") {
        return instance.post(url. data)
    } else if (method === "get") {
        return instance.get(url, {params:data})
    }
}