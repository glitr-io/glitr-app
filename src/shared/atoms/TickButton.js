import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import TickIcon from '../images/right.png';
import { withNavigation } from 'react-navigation';

const TickButton = ({ navigation, onPress, disabled }) => (
    <TouchableOpacity
        style={{
            margin: 10,
            height: 70,
            width: 70,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        onPress={() => !disabled && onPress()}
    >
        <Image source={TickIcon} style={{ height: 70, width: 70, opacity: disabled ? 0.5 : 1 }} />
    </TouchableOpacity>
);

export default withNavigation(TickButton);
