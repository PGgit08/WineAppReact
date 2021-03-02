// async storage token
export const USER_KEY = 'token';

const api_base = 'https://wineapp-api.herokuapp.com';

const auth_base = api_base + '/users';
const posts_base = api_base + '/posts';

export const AUTH_ENDPOINTS = {
    register: auth_base + '/register',
    login: auth_base + '/login',
    identify: auth_base + '/identify'
};

export const POST_ENDPOINTS = {
    get: posts_base + '/get',
    add: posts_base + '/add'
};