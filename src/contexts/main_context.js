import React, {createContext, useState} from 'react';

// initial provider state
var initialState = {
    jwt: null,
    store_id: null
};

// create the context
const AuthContext = createContext(initialState);

// create the provider
const AuthProvider = ({children}) => {
    // provider state part
    const [state, setState] = useState(initialState);
 
    // return provider with values
    return(
        <AuthContext.Provider value={{
                context: state, 
                change: setState
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
