// set up screens, set root as Init screen
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

// register screens
// navigation.registercomponents funcs here instead of usual react native
// func
registerScreens();

// set root to be Init
Navigation.events().registerAppLaunchedListener(() => {
    // the name of the root is the same name used in screens.js
    Navigation.setRoot({
        root: {
            component: {
                name: 'Initializing'
            }
        }
    });
});

