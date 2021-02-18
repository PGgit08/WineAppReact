import React, {createContext, useState} from 'react';

// initial provider state
var initialState = {
    jwt: null
};

// create the context
export const AuthContext = createContext(initialState);

// create the provider
export const AuthProvider = ({children}) => {
    // provider state part
    const [state, setState] = useState(initialState);
 
    // return provider with values
    return(
        <AuthContext.Provider value={{
            context: state, 
            change_context: setState
        }}>
            {children}
        </AuthContext.Provider>
    )
};
