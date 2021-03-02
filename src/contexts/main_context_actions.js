// storage imports
import {
    SignIn,
    SignOut,
    Init
} from '../storage';


// api request imports
import { default as AUTH_API } from '../api_handling/auth_requests';
import { default as POST_API } from '../api_handling/post_requests';

// functions that change main_context's state
// screens can import these functions really easily
// and they can be used as event handlers

const MakeError = dispatch => {
    return (err_obj) => {
        Backend_Update(dispatch)(err_obj);
    };
}

const IdentifyUser = dispatch => {
    // send jwt as param
    return (jwt) => {
        // api request
        // to identify person
        // and get their posts + creds

        let userData = {
            username: "",
            email: "",
            posts: {}
        };

        // creds
        AUTH_API.identify_user(jwt).then(
            (res) => {
                userData.username = res.data.username;
                userData.email = res.data.email;
            }
        ).catch(MakeError(dispatch));

        // posts
        POST_API.identify_post(jwt).then(
            (res) => {
                userData.posts = res.data.posts;
            }
        ).catch(MakeError(dispatch));

        // dispatch
        console.log('got here');
        dispatch({
            type: 'updateUser',
            val: userData
        });
    };
};

const Context_SignIn = dispatch => {
    // return function explained in main_context
    return ({username, password}) => {
        // api request
        // try doing log in
        AUTH_API.login({username, password}).then(
            (res) => {
                // console.log('ok');
                dispatch({
                    type:'sign_in',
                    val: res.data
                });

                SignIn(res.data);
            }
        ).catch(MakeError(dispatch));
    };
};


const Context_Register = dispatch => {
    return ({username, password, email}) => {
        AUTH_API.register({username, password, email}).then(
            (res) => {
                dispatch({
                    type: 'sign_in',
                    val: res.data
                });

                SignIn(res.data);
            }
        ).catch(MakeError(dispatch));
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
        // console.log('back end refresh');
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
    Backend_Refresh
};