import React, { useContext, useState, useEffect } from 'react';
import { MainContext } from '../contexts/main_context';

import Alert from '../components/alert';
import { back } from 'react-native/Libraries/Animated/src/Easing';

const useError = () => {
    return useContext(MainContext);
}; 

export default function API_ErrorHandler(){
    const back_end = useError().state.back_end;
    const { Backend_Refresh } = useError().actions;

    const error = back_end.errorMsg;

    return (
        <>
            {/* {console.log('error handler re-render')} */}
            {/* basic error, like this user already exists */}
            {back_end.isError === true ? (
                <>
                    {Alert({error, Backend_Refresh})}
                </>
            ) : (
                <>
                    {/* {console.log('no error!')} */}
                </>
            )}
        </>
    );
};