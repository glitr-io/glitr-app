import React from 'react';
import { Image } from 'react-native';
import LogoImage from '../images/Logo.png';

const Logo = (props) => (
    <Image
        source={LogoImage}
        resizeMethod="scale"
        resizeMode="contain"
        {...props}
    />
);

export default Logo;
