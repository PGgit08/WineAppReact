// storage imports
import {
    SignIn,
    SignOut,
    Init
} from '../storage';


// api request imports
import { default as AUTH_API } from '../api_handling/auth_requests';
import { default as POST_API } from '../api_handling/post_requests';
import { default as STORE_API } from '../api_handling/store_requests';

/* const mock = [
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"1"},
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"2"},
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"3"},
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"4"},
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"5"},
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"6"},
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"7"},
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"8"},
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"9"},
    {owner: "1", time:"4:17", body:"hello there this is a mock", id:"10"}
]; */

// update server when error
const MakeError = dispatch => {
    return (err_obj) => {
        Backend_Update(dispatch)(err_obj);
    };
}

// functions that change main_context's state
// screens can import these functions really easily
// and they can be used as event handlers
const IdentifyUser = dispatch => {
    // send jwt as param
    return async (jwt) => {
        // api request
        // to identify person
        // and get their posts + creds        
        try{
            // get credentials + posts
            const creds_res = (await AUTH_API.identify_user(jwt)).data;
            const posts_res = (await POST_API.identify_post(jwt)).data;

            // then dispatch
            dispatch({
                type: 'updateUser',
                val: {
                    username: creds_res.username,
                    email: creds_res.email,
                    posts: posts_res.posts
                }
            });
        }
        catch(err){
            // make server error
            MakeError(dispatch)(err);
        };
    };
};

const GetStoreInfo = dispatch => {
    return async (store_id) => {
        try{
            const store_info = (await STORE_API.get_store(store_id)).data;
            return store_info.store;
        }
        catch(err){
            MakeError(dispatch)(err);
        };
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
    Backend_Refresh,
    Backend_Update,
    GetStoreInfo
};