export default {
    namespace: true,
    state: {
        token: "", // 存放jwt token
        isLogin: false // 是否登入
    },
    mutations: {
        SET_AUTH(state, options) {
            state.token = options.token;
            state.isLogin = options.isLogin;
        }
    },
    actions: {
        setAuth(context, options) {
            context.commit('SET_AUTH', {
                token: options.token,
                isLogin: options.isLogin
            })
        }
    }
}