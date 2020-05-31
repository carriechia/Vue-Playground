import router from '../router/index';

export const tip = msg => {
    console.log(msg)
}

export const toLogin = () => {
    router.replace ({
        name: "login",
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

export const to403Page = () => {
    router.replace ({
        name: "403",
    });
}