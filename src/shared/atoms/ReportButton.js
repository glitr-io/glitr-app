import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const ReportButton = ({ count }) => (
    <Button
        transparent
        style={{
            paddingHorizontal: 10
        }}
    >
        <Text style={styles.text}>Report</Text>
    </Button>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'campton_semibold',
        fontSize: 15,
        marginLeft: -10,
        paddingRight: 0
    }
});

export default ReportButton;
