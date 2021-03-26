import React, { Component, createRef } from 'react';

// context import
import { MainContext } from '../contexts/main_context';

import { View, Button, Text } from 'react-native';
// map import
// import MapView from "react-native-maps";

// since this will require
// lots of functions
// it is a class

var INIT_LAT;
var INIT_LONG;


class Map extends Component{
    constructor(props){
        super(props);
        this.setStoreId = this.props.context.actions.setStoreId;

        this.firstRender = createRef(true);

        this.state = {
            search_query: "",
            user_loc: {},
            current_stores: {},
            map_loc: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            }
        };

        // watch id
        this.watch_id;
    };

    componentDidMount(){
        // don't know
    };

    componentWillUnmount(){
        // don't know
    }

    getUserLoc = () => {
        // get user location
        // set geography state
        return new Promise((resolve, reject) => {
            this.watch_id = navigator.geolocation.watchPosition(
                (position) => {resolve(position.coords);},
                (error) => {console.log(error);}
            );
        });
    };

    search_NearMe = () => {
        // call API, set current_stores
        // state
    };

    search_ByLookup = () => {
        // call API, set current_stores
        // state
    };

    render(){
        return (
            <View style={{flex:1}}>
                <Text>
                    React Native Maps not working on web.
                    Here is alternative system.
                </Text>
                <Text>
                    Map Info(location): { this.state.map_loc.latitude }, { this.state.map_loc.longitude }
                </Text>

            </View>
        );
    };
};


function FullMap({ navigation }){
    return (
        <MainContext.Consumer>
            {context => (
                <Map navigation={navigation} context={context}/>
            )}           
        </MainContext.Consumer>
    );
};

export default FullMap;
