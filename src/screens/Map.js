import React, { Component } from 'react';

// context import
import { MainContext } from '../contexts/main_context';

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
            context_state: this.props.context.state,
            search_query: "",
            geography: {
                map: {
                    center: {},
                    zoom_level: 0
                },
                user: {
                    user_loc: {}
                },
                wineapp_api: {
                    near_me: {},
                    lookup: {}
                } 
            }
        };
    };

    getUserLoc = async () => {
        // to get user location
        // and return as a promise
    };

    search_NearMe = async () => {
        // search near the person
    };

    search_ByLookup = async () => {
        // search for a place
        // by a lookup string
    };

    render(){
        return (
            console.log('hi')
        );
    };
};


function map({ navigation }){
    return (
        <MainContext.Consumer>
            {context => (
                <Map navigation={navigation} context={context}/>
            )}           
        </MainContext.Consumer>
    );
};

export default map;
