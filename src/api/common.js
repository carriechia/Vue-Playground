import http from './http';

export function token() {
    const url = 'token'
    return http.get(url).then(response => {
        return Promise.resolve(response.data)
      }).catch(err => {
        throw err
      })
}