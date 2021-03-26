import { STORE_ENDPOINTS } from '../config';

// parsing function import
import { CheckResponse } from './ErrorHandler';

const get_store = async (store_id) => {
    try{
        let res = await axios.get(STORE_ENDPOINTS.get + `/${store_id}`);
        return CheckResponse(res);
    }
    catch(err){
        console.log(err);
    };
};

export default {
    get_store
};
