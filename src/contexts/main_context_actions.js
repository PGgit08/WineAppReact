// storage imports
import {
    SignOut,
    Init,
    SignIn
} from '../storage';


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

const Context_SignIn = dispatch => {
    return (jwt) => {
        // set username and password in context
        dispatch({
            type: 'sign_in',
            val: {
                jwt: jwt
            }
        });

        // save this user in local storage
        SignIn(jwt);
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


// export all the functions
export default {
    Context_SignIn,
    Context_SignOut,
    checkJWT,
    setStoreId
};