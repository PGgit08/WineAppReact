import axios from 'axios'
import deviceStorage from './storage'

// login service, does api request+storage
const login_url = 'https://wineapp-api.herokuapp.com/login';

export default async function login_user(uname, pword){
    // get request
    // if handled properly, the storage lib in this 
    axios.get(login_url, {
        params: {
            username: uname,
            password: pword
        }
    }).then((response) => {
        // handle jwt here
        deviceStorage.saveItem('is_logged_in', 'true')
        deviceStorage.saveItem('token', response.data)
    }).catch((error) => {
        // handle errors here
        console.log(error)
    });
};
