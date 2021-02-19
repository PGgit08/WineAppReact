import React, {createContext, useReducer} from 'react';

// import actions for changing context's state
const ContextActions = require('./main_context_actions').default;

// initial provider state
var initialState = {
    jwt: null,
    store_id: null
};

// reducer(uses dispatch)
const reducer = (state, action) => {
    switch (action.type){
        case 'sign_in': return {
            jwt: action.val
        };
        case 'sign_out': return {
            jwt: null
        };
        case 'setStoreId': return {
            store_id: action.val
        };
        // if action.type isn't anything above
        default: console.log('why?'); return state;
    };
}

// create the context
const AuthContext = createContext(initialState);

// create the provider
const AuthProvider = ({children}) => {
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
        <AuthContext.Provider value={{
                context: state, 
                actions: NewActions
            }}>
            {children}
        </AuthContext.Provider>
    )
};

// export 
export {
    AuthContext,
    AuthProvider
}
