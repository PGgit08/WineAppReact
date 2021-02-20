// storage imports
import {
    SignIn,
    SignOut,
    Init
} from '../storage';

// api axios import
import axios from 'axios';

// config urls
import { AUTH_ENDPOINTS } from '../config';

// functions that change main_context's state
// screens can import these functions really easily
// and they can be used as event handlers

// function to identify user based on 
// jwt
const IdentifyUser = dispatch => {
    // send jwt as param
    return (jwt) => {
        // api request
        // to identify person
        axios.get(AUTH_ENDPOINTS.identify, {
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        }).then(
            (res) => {
                dispatch({
                    type: 'updateUser',
                    val: {
                        username: res.data.username,
                        email: res.data.email
                    }
                });
            }
        ).catch(
            (err) => {console.log(err)}
        );
    };
};

const Context_SignIn = dispatch => {
    // return function explained in main_context
    return ({username, password}) => {
        // api request
        // try doing log in
        axios.get(AUTH_ENDPOINTS.login, {
            params: {
                username: username, 
                password: password
            }
        }).then(
            (res) => {
                // storage sign in
                SignIn(res.data);
                
                // change context state
                dispatch({
                    type: 'sign_in',
                    val: res.data
                });
                // identify user
                IdentifyUser(dispatch)(res.data);
            }
        ).catch(
            (err) => {console.log(err)}
        );
    };
};


const Context_Register = dispatch => {
    return ({username, password, email}) => {
        // api request
        // try doing register
        axios.get(AUTH_ENDPOINTS.register, {
            params: {
                username: username, 
                password: password,
                email: email
            }
        }).then(
            (res) => {
                // storage sign in
                SignIn(res.data);
                
                // change context state
                dispatch({
                    type: 'sign_in',
                    val: res.data
                });
                // identify user
                IdentifyUser(dispatch)(res.data);
            }
        ).catch(
            (err) => {console.log(err)}
        );
    };
};

const Context_SignOut = dispatch => {
    return () => {
        // storage signout
        SignOut();
        // context signout
        dispatch({
            type: 'sign_out'
        });
    };
};

const checkJWT = dispatch => {
    return () => {
        // check for token 
        // asyncronously
        Init().then((val) => {
            // even if val is null
            // the jwt will still be set to null
            dispatch({
                type: 'sign_in',
                val: val
            });
        }).catch((err) => {
            console.log(err);
        });
    };
};

const setStoreId = dispatch => {
    return (store_id) => {
        dispatch({
            type: 'setStoreId',
            val: store_id
        });
    };
};


// export all the functions
export default {
    IdentifyUser,
    Context_SignIn,
    Context_SignOut,
    Context_Register,
    checkJWT,
    setStoreId
};