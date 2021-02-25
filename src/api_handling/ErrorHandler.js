import React, { useContext, useState, useEffect } from 'react';
import { Alert, Button, View } from 'react-native';
import { MainContext } from '../contexts/main_context';

const useError = () => {
    return useContext(MainContext);
}; 

export default function API_ErrorHandler(){
    const back_end = useError().state.back_end;
    const { Backend_Refresh } = useError().actions;

    useEffect(() => {
        Backend_Refresh();
        console.log('backend, refreshed');
        console.log(back_end);
    }, []);

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
                    {alert(back_end.errorMsg)};
                    {/* {Backend_Refresh()}; */}
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