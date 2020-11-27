import http from './http';

/**
 * 登入會員
 * @param {*} member 登入資料
 */
export function login(member) {
    const url = '/login'
    const data = Object.assign({}, member)

    return http.post(url, data).then(response => {
        return Promise.resolve(response)
    }).catch(err => {
        throw err
    })
}

/**
 * 登出會員 之後用到
 */
// export function logout() {
//     const url = '/api/logout'
//     return http.post(url).then(response => {
//         return Promise.resolve(response.data)
//       }).catch(err => {
//         alert("Logout Failed.")
//         throw err
//       })
//   }


/**
 * 註冊會員
 * @param {*} member 註冊資料
 */
export function register(member) {
  const url = '/member'
  const data = Object.assign({}, member)

  return http.post(url, data).then(response => {
      return Promise.resolve(response)
    }).catch(err => {
      alert("Register Failed.")
      throw err
    })
}

/**
 * 取得會員資料
 */
export function list() {
    const url = '/members'
    return http.get(url).then(response => {
        return Promise.resolve(response.data)
      }).catch(err => {
        throw err
      })
}

/**
 * 取得會員資料
 */
export function memberProfile() {
    const url = '/profile'
    return http.get(url).then(response => {
        return Promise.resolve(response.data)
    }).catch(err => {
        throw err
    })
}

/**
 * Login Register 稽核
 * @param {*} data 欄位
 */
export function checkForm (data) {
    const errors = [];
    const checkEmail = data.email;

    if (checkEmail === "") {
        errors.push("Email required.");
    } else if (! validEmail(checkEmail)) {
        errors.push("Valid email required.");
    }

    if (data.password === "") {
        errors.push("Password required.");
    }

    if (data.name === "") {
        errors.push("Name required.");
    }

    return errors;
}

/**
 * email 驗證
 */
function validEmail (email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}