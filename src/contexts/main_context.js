import React, {createContext, useReducer} from 'react';

// import actions for changing context's state
const ContextActions = require('./main_context_actions').default;

// initial provider state
var initialState = {
    back_end: {
        isError: null,
        errorMsg: ""
    },
    jwt: null,
    user: {
        username: null, 
        email: null
    },
    store_id: null
};

// reducer(uses dispatch)
const reducer = (state, action) => {
    switch (action.type){
        case 'sign_in': return {
            jwt: action.val
        };
        case 'sign_out': return {
            jwt: null,
            user: {
                username: null,
                email: null
            }
        };
        case 'setStoreId': return {
            store_id: action.val
        };
        case 'updateUser': return {
            user: {
                username: action.val.username,
                email: action.val.email
            }
        };
        case 'serverError': return {
            back_end: {
                isError: action.val.isError,
                errorMsg: action.val.errorMsg
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
        </MainContext.Provider>
    )
};

// export 
export {
    MainContext,
    MainProvider
}
