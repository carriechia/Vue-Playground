import req from './http.js'

const auth = {
    signUp(param) {
        return req('post', '/api/register', param)
    },
    login(param) {
        return req('post', '/api/login', param)
    }
}

export default auth;

