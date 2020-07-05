import axios from 'axios'
import http from './http';

/**
 * 登入會員
 * @param {*} member 登入資料
 */
export function login(member) {
    const url = 'api/auth/login'
    const data = Object.assign({}, member)

    return http.post(url, data).then(response => {
        return Promise.resolve(response.data)
    }).catch(err => {
        throw err
    })
}

/**
 * 登出會員
 */
export function logout() {
      const url = '/api/auth/logout'
      return http.post(url).then(response => {
          return Promise.resolve(response.data)
        }).catch(err => {
          throw err
        })
    }

/**
 * 註冊會員
 * @param {*} member 註冊資料
 */
export function register(member) {
  const url = '/api/register'

  const data = Object.assign({}, member)

  return axios
    .post(url, data)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

/**
 * 取得會員資料
 */
export function list() {
    const url = '/api/members'
    return http.get(url).then(response => {
        return Promise.resolve(response.data)
      }).catch(err => {
        throw err
      })
}