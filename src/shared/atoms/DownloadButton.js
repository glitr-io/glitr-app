import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import DownloadIcon from '../images/Save.png';
import { withNavigation } from 'react-navigation';

const TickButton = ({ navigation, onPress }) => (
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
        <Image source={DownloadIcon} style={{ height: 70, width: 70 }} />
    </TouchableOpacity>
);

export default withNavigation(TickButton);
