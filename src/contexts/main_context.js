import React, {createContext, useReducer, useEffect, useState} from 'react';

// import actions for changing context's state
const ContextActions = require('./main_context_actions').default;

// initial provider state
var initialState = {
    back_end: {
        isError: false,
        errorMsg: ""
    },
    jwt: null,
    storage_loading: true,
    user: {
        username: "", 
        email: "",
        posts: []
    },
    store_id: null
};

// reducer(uses dispatch)
const reducer = (state, action) => {
    switch (action.type){
        case 'sign_in': return {
            ...state,
            jwt: action.val.jwt,
            storage_loading: false
        };
        case 'sign_out': return {
            ...state,
            jwt: null,
            user: {
                username: null,
                email: null,
                posts: {}
            }
        };
        case 'setStoreId': return {
            ...state,
            store_id: action.val
        };
        case 'updateUser': return {
            ...state,
            user: {
                username: action.val.username,
                email: action.val.email,
                posts: action.val.posts
            }
        };
        case 'Backend_Update': return {
            ...state,
            back_end: {
                isError: action.val.isError,
                errorMsg: action.val.errorMsg
            }
        };
        case 'Backend_Refresh': return {
            ...state,
            back_end: {
                isError: false,
                errorMsg: ""
            }
        };

        // if action.type isn't anything above
        default: console.log('why?'); return state;
    };
}

// create the context
const MainContext = createContext();


// create the provider
const MainProvider = ({children}) => {
    // provider state part
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    const NewActions = {};

    for(let key in ContextActions){
        // ContextActions[key](dispatch) returns
        // the function that does the action
        // so this is ok :)
        NewActions[key] = ContextActions[key](dispatch);
    };

    // return provider with values
    return(
        <MainContext.Provider value={{
                state: state, 
                actions: NewActions
            }}>
            {children}
            {/* {console.log('provider re-render')} */}
        </MainContext.Provider>
    )
};

// export 
export {
    MainContext,
    MainProvider
};
