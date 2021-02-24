import React, { useContext } from 'react';
import { Alert, Button, View } from 'react-native';
import { MainContext } from '../contexts/main_context';

export default function API_ErrorHandler(){
    const back_end = useContext(MainContext).state.back_end;
    // console.log(useContext(MainContext));
    const { Backend_Refresh } = useContext(MainContext).actions;

    const alertError = () => {
        Alert.alert(
            "Error",
            back_end.errorMsg,
            [{
                text: "Try Again",
                onPress: Backend_Refresh

            }]
        );
    };

    return (
        <>
            {/* basic error, like this user already exists */}
            {back_end.isError === true ? (
                <>
                    {alert(back_end.errorMsg)}
                    {Backend_Refresh()}  
                </>
            ) : (
                <>
                </>
            )};
            {/* advanced error, like 404 or internal 500 */}
            {/* {back_end.isError_complex === true ? } */}
        </>
    );
};