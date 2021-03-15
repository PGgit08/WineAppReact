import React, { useState } from 'react';
import {
    Overlay,
    Text,
    Button
} from 'react-native-elements';

import { View } from 'react-native';

import { Modal } from 'react-native-web';

export default function Alert(props){
    // alert that refreshes
    // after button press
    const [visible, setVisible] = useState(props.visible);


    const refresh = () => {
        props.Backend_Refresh();
        setVisible(false);
    };

    return (
        <View>
            <Overlay
                onBackdropPress={refresh}
                isVisible={visible}
                ModalComponent={Modal}
            >
                <Text>{ props.error }</Text>
                <Button
                    title="OK"
                    onPress={refresh}
                />

            </Overlay>
        </View>
    );
};
