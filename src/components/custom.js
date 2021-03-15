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
                    <View style={{...styles.container}}>
                        { children }
                    </View>
                )
            }
        </ThemeConsumer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
