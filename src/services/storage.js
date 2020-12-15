import AsyncStorage from '@react-native-community/async-storage';

// javascript strange way of stuff
// create device storage json object
// in the object access saveItem as deviceStorage.saveItem
const deviceStorage = {
  
    async saveItem(key, value) {
        try {
            await AsyncStorage.clear()
            await AsyncStorage.setItem(key, value);
        } 
        catch(error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async getItem(key){
        try{
            const value = await AsyncStorage.getItem(key);
            return value;
        }
        catch(error){
            console.log('AsyncStorage Error: ' + error.message)
        }
    }
    
};

// export
export default deviceStorage
