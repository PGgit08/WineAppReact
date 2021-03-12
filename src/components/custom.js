/* 
File for creating custom components
These are re-usable.
*/
import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

// theme context
import {
    ThemeConsumer,
    Header,
    Text,
    useTheme
} from 'react-native-elements';

export function Container({ children }){
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={{backgroundColor: theme.colors.main.white, ...styles.container}}>
                        { children }
                    </View>
                )
            }
        </ThemeConsumer>
    );
};


export function ScreenHeader({ props }){
    const { text } = props;
    const theme = useTheme();
    return(
        <Header
            placement="center"
            centerComponent={
                <View>
                    <Text h1 h1Style={
                        {fontFamily:theme.font.main.title, fontSize:60, color:theme.colors.main.black}
                    }>
                        { text }
                    </Text>
                </View>
            }
            containerStyle={{
                backgroundColor: theme.colors.main.red,
                justifyContent: 'center'
            }}
        />
    );
};

export function PageTitle(){
    // nothing here yet
};

export function CustomButton({ props }){
    return(
        // button will be here
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
