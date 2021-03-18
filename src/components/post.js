import React from 'react';

import {
    View,
    Text
} from 'react-native';

import {
    ListItem
} from 'react-native-elements';


function Post(props){
    const { post, id } = props;

    // the key is the post's index in the context array

    return (
        <View style={{marginLeft: 10, marginRight: 10, marginBottom:20}}>
            <ListItem key={post.id}>
                <ListItem.Content>

                    <View style={{flexDirection: 'row'}}>

                        <View style={{flex: 2}}>
                            <ListItem.Title>
                                Posted By: { post.owner }
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                On Store: { post.my_store }
                            </ListItem.Subtitle>
                            <ListItem.Subtitle>
                                Date Posted:
                            </ListItem.Subtitle>
                            <ListItem.Subtitle>
                                { post.time }
                            </ListItem.Subtitle>
                        </View>

                        <View style={{flex: 3, marginLeft: 10}}>
                            <Text>
                                { post.body }
                            </Text>
                        </View>

                    </View>

                    </ListItem.Content>
            </ListItem>
        </View>
    );
};


export default Post;
