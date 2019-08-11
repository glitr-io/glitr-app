import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import ChooseMemeIcon from '../images/choose-meme.png';
import { withNavigation } from 'react-navigation';

const ChooseMemeButton = ({ navigation, onMemeSelect }) => (
    <TouchableOpacity
        style={{
            margin: 10,
            height: 70,
            width: 70,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        onPress={() => navigation.navigate('MemeTypesFullScreen', { onMemeSelect })}
    >
        <Image source={ChooseMemeIcon} style={{ height: 70, width: 70 }} />
    </TouchableOpacity>
);

export default withNavigation(ChooseMemeButton);
