import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import shareIcon from '../images/share.png';

const ShareButton = ({ count }) => (
    <Button
        transparent
        style={{
            paddingHorizontal: 10
        }}
    >
        <Image source={shareIcon} style={{ height: 15, width: 15 }} />
    </Button>
);

export default ShareButton;
