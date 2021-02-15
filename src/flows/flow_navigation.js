import Auth from './Auth';
import Home from './Home';

// need to import this so that no name errors appear
import React from 'react';

export function goHome(jwt){
    return <Home/>;
};

export function goAuth(){
    return <Auth/>;
};
