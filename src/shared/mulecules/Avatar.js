import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import SquaredCircle from '../atoms/SquaredCircle';
const SIZE = 70;

const Avatar = ({ icon, name }) => (
    <SquaredCircle size={SIZE}>
        <View style={[styles.container, { height: SIZE, width: SIZE }]}>
            {!!icon 
            ? (<Image
                source={{ uri: icon }}
                style={{ height: SIZE, width: SIZE }}
            />)
            : (<Text style={styles.text}>{name}</Text>)
            }
        </View>
    </SquaredCircle>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'campton_semibold',
        fontSize: 20,
        color: '#fff'
    },
    container: {
        backgroundColor: '#65318f',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Avatar;