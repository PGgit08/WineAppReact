import axios from 'axios'

const login_url = 'http://192.168.211.1:80/login/';

export default async function login_user(uname, pword){
    console.log("SHIT IS HAPPENING")
    // get request
    fetch(login_url, {
        method: "GET",
        body: JSON.stringify({
            username: uname,
            password: pword
        })
    }).then((response) => {
        // handle jwt here
        console.log(response.text())
        console.log('aa')
    }).catch((error) => {
        // handle errors here
        console.log(error)
    });
};
