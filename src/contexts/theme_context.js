import React, { createContext } from 'react';

// import original value for context
import { THEME } from '../config';

const ThemeContext = createContext(THEME);

const ThemeProvider = ({ children }) => {
    return(
        <ThemeContext.Provider>
            { children }
        </ThemeContext.Provider>
    );
};

export {
    ThemeContext,
    ThemeProvider
};
