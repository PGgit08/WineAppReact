// file for custom react componenets
// using styled-components lib
import React, { useContext } from 'react';

// import theme context
import { ThemeContext } from '../contexts/theme_context';

// styled componenets lib!
import styled from 'styled-components/native';

var theme = require('../config').THEME;

// for setting context variable
export const GetTheme = () => {
    theme = useContext(ThemeContext);
    return <></>;
};

export const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    background-color: blue;
`;

export const Auth_Header = styled.View``

export const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    width: 20%;
    height: 10%;
    left: 40%;
    top: 70%;

    background-color: ${theme.colors.main.red};
    border-radius: 40px;
    justifyContent: center;
    alignItems: center;
`;


export const ButtonText = styled.Text`
    position: absolute;
    top: 32%;

    font-family: ${theme.fonts.main.content};
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
`;

export const Input = styled.TextInput`
    width: 20%;
    height: 10%;
    margin-bottom: 1%;

    font-size: 37px;
    textAlign: center;

    background: ${theme.colors.main.gray};
    border: 1px solid #000000;
    box-sizing: border-box;
`;