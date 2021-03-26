import React from 'react';

// api lib import
import axios from 'axios';

// config urls
import { POST_ENDPOINTS } from '../config';

// response checker(returns promise)
import { CheckResponse } from './ErrorHandler';

const identify_post = async (jwt) => {
    try{
        let res = await axios.get(POST_ENDPOINTS.get, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
        return CheckResponse(res);
    }
    catch(err){
        console.log(err);
    };
};



export default {
    identify_post
};
