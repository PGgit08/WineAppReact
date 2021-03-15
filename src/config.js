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

// basic things for theme
const theme_basic = {
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
            title: "Sacramento-Regular",
            content: "Assistant"
        }
    }
};

// theme object for app
export const THEME = {
    Button: {
        buttonStyle: {
            backgroundColor: theme_basic.colors.main.red,
            borderRadius: 40,
        }
    },
    Text: {
        h1Style: {
            marginLeft: 'auto',
            marginRight: 'auto',
            color: theme_basic.colors.main.red,
            fontFamily: theme_basic.fonts.main.title,
            flex: 1,
            marginTop: 80
        }
    },
    Input: {
        inputContainerStyle: {
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }
};

