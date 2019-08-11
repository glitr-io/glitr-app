import React from 'react';
import SquaredCircle from '../atoms/SquaredCircle';
import { View, Text, StyleSheet } from 'react-native';

const INDICATOR_SIZE = 30;

const Indicator = ({ text }) => (
    <SquaredCircle size={INDICATOR_SIZE}>
        <View style={[styles.centered, { backgroundColor: '#65318f', height: INDICATOR_SIZE, width: INDICATOR_SIZE }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </SquaredCircle>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'campton_light',
        color: '#fff'
    },
    centered: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Indicator;