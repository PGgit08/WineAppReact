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
    Button,
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


export function ScreenHeader({ children }){
    const { text } = children;
    const theme = useTheme().theme;
    return(
        <Header
            placement="center"
            centerComponent={
                <View>
                    <Text h1 h1Style={
                        {fontFamily:theme.fonts.main.title, fontSize:60, color:theme.colors.main.black}
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

export function PageTitle({ children }){
    const theme = useTheme().theme;
    // console.log(text);
    return(
        <Text h1 h1Style={
            {
                fontFamily: theme.fonts.main.title,
                fontSize: 60,
                color: theme.colors.main.red,
                textAlign: 'center'
            }
        }>
            { children }
        </Text>
    );
};

export function CustomButton({ props }){
    const theme = useTheme().theme;

    return(
        <Button
            buttonStyle={{
                justifyContent: 'center',
                width: 10
            }}
            
            title="PROPS" 
        />
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
