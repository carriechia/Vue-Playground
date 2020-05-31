import jwt from 'jsonwebtoken';
import axios from 'axios'

/**
 * 登入會員
 * @param {*} member 登入資料
 */
export function login(member) {
  const url = 'api/login'
  const data = Object.assign({}, member)

  return axios.post(url, data).then(response => {
        return new Promise((resolve, reject) => {
            jwt.verify(response.token, 'JWT_TOKEN', (err, payload) => {
              if (err) {
                reject(err); // 驗證失敗回傳錯誤
              } else {
                resolve(payload); // 驗證成功回傳 payload data
              }
            });
        });
    //   return Promise.resolve(response.data)
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
    return axios
      .get(url)
      .then(response => {
        return Promise.resolve(response.data)
      })
      .catch(err => {
        throw err
      })
}