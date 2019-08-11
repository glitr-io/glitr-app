import React from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';

const SquaredCircle = ({ size, children, style }) => {
    return (
        <View style={{ height: size, width: size, borderRadius: (size * .4), overflow: 'hidden', alignContent: 'center', justifyContent: 'center', alignItems: 'center', ...style }}>
            {children}
        </View>
    );
}

export default SquaredCircle;
