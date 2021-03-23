import React from 'react';

import {
    View,
    Text
} from 'react-native';

import {
    ListItem
} from 'react-native-elements';


function Post(props){
    const { post, redirect } = props;

    // the key is the post's index in the context array

    return (
        <View style={{marginLeft: 10, marginRight: 10, marginBottom:20}}>
            <ListItem key={post.id} onLongPress={redirect}>
                <ListItem.Content>
                    <ListItem.Title>
                        On Store: { post.my_store }
                    </ListItem.Title>

                    <ListItem.Subtitle>
                        Posted By: { post.owner }
                    </ListItem.Subtitle>

                    <ListItem.Subtitle>
                        Time Posted: { post.time }
                    </ListItem.Subtitle>

                    <View style={{marginTop:10}}>
                        <Text>
                            { post.body }
                        </Text>
                    </View>
                </ListItem.Content>
            </ListItem>
        </View>
    );
};


export default Post;
