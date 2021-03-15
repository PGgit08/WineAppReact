import React, { useContext, useState, useEffect } from 'react';
import { MainContext } from '../contexts/main_context';

// alert component
import Alert from '../components/alert';

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
            {back_end.isError === true ? (
                <>
                    <Alert 
                        visible={true}
                        Backend_Refresh={Backend_Refresh}
                        error={back_end.errorMsg}
                    />
                </>
            ) : (
                <>
                </>
            )}
        </>
    );
};

export const CheckResponse = (res) => {
    return new Promise((resolve, reject) => {
        if(res.data.error == 1){
            reject(
                {
                    isError: true,
                    errorMsg: res.data.mes
                }
            );
        }
        if(res.data.error == 0 || !res.data.hasOwnProperty("error")){
            // there will be no error
            // in some cases, like login
            // which just returns JWT
            resolve(res);
        };
    });
};
