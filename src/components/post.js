import React from 'react';

import {
    Text,
    View,
    StyleSheet
} from 'react-native';


function Post(props){
    const { post } = props;

    return (
        <View style={styles.container}>
            <View style={styles.post_info}>
                <Text> Username: {post.owner} </Text>
                <Text> Store: {post.my_store} </Text>
                <Text>
                    Post: {post.body}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E6E6E6",
        overflow: "visible",
        width: "70%",
        height: "15%",
        justifyContent: 'center',
        alignContent: 'center'
    },
    post_info: {
        width: "50%",
        height: "10%",
        overflow: "scroll"
    }
});


export default Post;
