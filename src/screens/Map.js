import React, { Component, createRef } from 'react';

// context import
import { MainContext } from '../contexts/main_context';

import { View, Button, Text } from 'react-native';
// map import
import MapView from "react-native-maps";

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
        // each time component is mounted
        // get user's location
        // IS A MUST
        // this.getUserLoc().then(
        //     (coords) => {
        //         // after getting user's location
        //         // set state of the user's location
        //         this.setState({
        //             user_loc: {
        //                 latitude: coords.latitude,
        //                 longitude: coords.longitude
        //             }
        //         });
        //         console.log(this.state);
        //     }
        // );
    };

    componentWillUnmount(){
        // unsubscribe the watching navigation
        // navigator.geolocation.clearWatch(this.watch_id);
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
                <MapView 
                    style={{flex:1}}
                    showUserLocation={true}
                    followsUserLocation={true}
                />
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
