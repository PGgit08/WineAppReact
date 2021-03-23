import React, { Component } from 'react';

// context import
import { MainContext } from '../contexts/main_context';

import { View, Button, Text } from 'react-native';
// map import
// import MapView from "react-native-maps";

// since this will require
// lots of functions
// it is a class
class Map extends Component{
    constructor(props){
        super(props);
        this.setStoreId = this.props.context.actions.setStoreId;
        this.state = {
            storeId: this.props.context.state.store_id,
            wineapp_api: {
                current_stores: {}
            },
            search_query: "",
            geography: {
                map: {
                    location: {
                        latitude: 0,
                        longitude: 0,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }
                },
                user: {
                    user_loc: {}
                }
            }
        };
    };

    componentDidMount(){
        // set user loc?
        this.getUserLoc().then(
            () => {this.setMapLoc(this.state.geography.user.user_loc)}
        );
    };

    setMapLoc(new_loc){
        // just set map state
        console.log(this.state);
        this.setState(
            {
                ...this.state,
                geography: {
                    ...this.state.geography,
                    map: {
                        location: new_loc
                    }
                }
            }
        );
    };

    getUserLoc = async () => {
        // get user location
        // set geography state
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                console.log(position.coords);
                await this.setState(
                    {
                        ...this.state,
                        geography: {
                            ...this.state.geography,
                            user: {
                                user_loc: {
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude
                                }
                            }
                        }
                    }
                );
                console.log(this.state);
            }
        );
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
