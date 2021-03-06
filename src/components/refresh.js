import React, { useState } from 'react';

import {
    ScrollView,
    RefreshControl
} from 'react-native';


function Refresher(props){
    const [refreshing, setRefreshing] = useState(false);
    const { refresh } = props;

    return (
        <ScrollView
            contentContainerStyle={{justifyContent:'center', flex:1}}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => {
                        // refresh func should be async
                        refresh();
                        setRefreshing(false);
                    }}
                />
            }
        />
    );
}

export default Refresher;
