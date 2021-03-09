// file for custom react componenets
// using styled-components lib
import React, { useContext } from 'react';

// import theme context
import { ThemeContext } from '../contexts/theme_context';

var context;

export const GetTheme = () => {
    context = useContext(ThemeContext);
};
