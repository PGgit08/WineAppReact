// async storage token
export const USER_KEY = 'token';

const auth_base = 'https://wineapp-api.herokuapp.com/users';

export const AUTH_ENDPOINTS = {
    register: auth_base + '/register',
    login: auth_base + '/login',
    identify: auth_base + '/identify'
};