// functions that change main_context's state
// screens can import these functions really easily
// and pass parameters into them easily
import React, { useContext } from 'react';
import {AuthContext} from './main_context';

// context setter
const set = useContext(AuthContext).change; 

const Context_SignIn = (jwt) => {
    set({jwt: jwt});
};

const Context_SignOut = () => {
    set({jwt: null});
};

const checkJWT = (jwt) => {
    // first set jwt
    set({jwt: jwt});

    // then check it
    return useContext(AuthContext).context.jwt;
};

const setStoreId = (store_id) => {
    set({store_id, store_id});
};

const readStoreId = () => {
    return useContext(AuthContext).context.store_id;
};

// export all the functions
export {
    Context_SignIn,
    Context_SignOut,
    checkJWT,
    setStoreId,
    readStoreId
};