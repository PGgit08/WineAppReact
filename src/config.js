// async storage token
export const USER_KEY = 'token';

const api_base = 'https://wineapp-api.herokuapp.com';

const auth_base = api_base + '/users';
const posts_base = api_base + '/posts';

// endpoint objects

export const AUTH_ENDPOINTS = {
    register: auth_base + '/register',
    login: auth_base + '/login',
    identify: auth_base + '/identify'
};

export const POST_ENDPOINTS = {
    get: posts_base + '/get',
    add: posts_base + '/add'
};

// theme object for app
export const THEME = {
    colors: {
        main: {
            red: "#DE3232",
            white: "#FFFFFF",
            black: "#000000",
            gray: "#F2F2F2"
        } 
    },
    fonts: {
        main: {
            title: "Sacramento",
            content: "Assistant"
        }
    }
};
