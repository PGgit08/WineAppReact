import React, {useState, useEffect, useContext} from 'react';

import {
    Text
} from 'react-native-elements';

import {
    Container
} from '../components/custom';

import { MainContext } from '../contexts/main_context';

function Posts({ navigation }){
    const context = useContext(MainContext);
    const STOREID = context.state.store_id;
    const get_store = context.actions.GetStoreInfo;

    // loading state
    const [loading, setLoading] = useState(true);

    // store info state(including posts)
    const [storeInfo, setStoreInfo] = useState({});


    // get store info full function
    const GetStoreInfo = () => {
        setLoading(true);
        get_store(STOREID).then(
            (store) => {setLoading(false); setStoreInfo(store);}
        );
    };

    // after render call this ONLY if STOREID changed
    useEffect(
        () => {
            GetStoreInfo();
        },
        [STOREID]
    );

    if(loading){
        return (
            <Text h1>LOADING</Text>
        );
    };

    return (
        <Container>
            
        </Container>
    );
};

export default Posts;
