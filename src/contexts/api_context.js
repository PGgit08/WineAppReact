import React, { createContext, useReducer } from 'react';

const ContextActions = require('./api_context_actions').default;

var initialState = {
    status: {
        error: false,
        errorMsg: ""
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "makeError": return {
            ...state,
            status: {
                error: true,
                errorMsg: action.val.errorMsg
            }
        };
        case "removeError": return {
            ...state,
            status: {
                error: false,
                errorMsg: ""
            }
        };
    };
};

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    // return value of reducer becomes the 
    // "state", thanks to the useReducer hook  
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    const NewActions = {};

    for(let key in ContextActions){
        NewActions[key] = ContextActions[key](dispatch)
    };

    return(
        <ApiContext.Provider value={{
            state: state,
            actions: NewActions
        }}>
            { children }
        </ApiContext.Provider>
    );
};


export {
    ApiContext,
    ApiProvider
};
