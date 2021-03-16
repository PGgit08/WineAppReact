/* 
File for creating custom components
These are re-usable.
*/
import React from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';

// theme context
import {
    ThemeConsumer
} from 'react-native-elements';

export function Container({ children }){
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <KeyboardAvoidingView style={styles.container}>
                        { children }
                    </KeyboardAvoidingView>
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
