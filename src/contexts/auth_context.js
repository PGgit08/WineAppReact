import {createContext, useState} from 'react';

// initial provider state
var initialState = {
    jwt: null
};

// create the context
export const AuthContext = createContext();

// create the provider
export const AuthProvider = ({children}) => {
    // provider state part
    const [state, setState] = useState(initialState);
 
    // return provider with values
    return(
        <AuthContext.Provider value={{
            state: state, 
            state_change: setState
        }}>
            {children}
        </AuthContext.Provider>
    )
};
