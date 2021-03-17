import React from 'react';

import {
    ListItem
} from 'react-native-elements';


function Post(props){
    const { post, id } = props;

    return (
        <ListItem key={id}>
            <ListItem.Content>
                <ListItem.Title>
                    { post.owner }
                </ListItem.Title>
                <ListItem.Subtitle>
                    { post.my_store }
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};


export default Post;
