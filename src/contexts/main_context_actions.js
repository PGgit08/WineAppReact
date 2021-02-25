// storage imports
import {
    SignIn,
    SignOut,
    Init
} from '../storage';


// api request imports
import { default as AUTH_API } from '../api_handling/auth_requests';

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
        // and get their posts + creds
    };
};

const Context_SignIn = dispatch => {
    // return function explained in main_context
    return async ({username, password}) => {
        // api request
        // try doing log in
        await AUTH_API.login({username, password}).then(
            (res) => {
                console.log('ok');
                dispatch({
                    type:'sign_in',
                    val: res.data
                });

                SignIn(res.data);
            }
        ).catch((err_obj) => Backend_Update(dispatch)(err_obj));
    };
};


const Context_Register = dispatch => {
    return async ({username, password, email}) => {
        await AUTH_API.register({username, password, email}).then(
            (res) => {
                dispatch({
                    type: 'sign_in',
                    val: res.data
                });

                SignIn(res.data);
            }
        ).catch((err_obj) => Backend_Update(dispatch)(err_obj));
    };
};

const Context_SignOut = dispatch => {
    return () => {
        // context signout
        dispatch({
            type: 'sign_out'
        });
        // storage signout
        SignOut();
    };
};

const checkJWT = dispatch => {
    return async () => {
        // check for token 
        // asyncronously
        await Init().then((val) => {
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

const Backend_Update = dispatch => {
    return (errorObj) => {
        dispatch({
            type: "Backend_Update",
            val: {
                isError: errorObj.isError,
                errorMsg: errorObj.errorMsg
            }
        });
    };
};

const Backend_Refresh = dispatch => {
    return () => {
        dispatch({
            type: "Backend_Refresh"
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
    setStoreId,
    Backend_Update,
    Backend_Refresh
};