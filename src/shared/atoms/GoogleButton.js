import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Button } from 'native-base';
import GoogleLogo from '../images/google.png';

const FacebookButton = ({ onPress }) => (
    <Button onPress={onPress} style={{ height: 80, width: '100%', alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
        <Image
            source={GoogleLogo}
            resizeMethod="auto"
            resizeMode="contain"
            style={{ height: 50, marginBottom: 10 }}
        />
    </Button>
);

FacebookButton.propTypes = {
    onPress: PropTypes.func.isRequired
};

export default FacebookButton;