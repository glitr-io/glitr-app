import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import CancelIcon from '../images/close_big.png';
import { withNavigation } from 'react-navigation';

const CancelButton = ({ navigation, onPress }) => (
    <TouchableOpacity
        style={{
            margin: 10,
            height: 70,
            width: 70,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        onPress={onPress}
    >
        <Image source={CancelIcon} style={{ height: 70, width: 70 }} />
    </TouchableOpacity>
);

export default withNavigation(CancelButton);
