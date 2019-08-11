import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        borderColor: 'black',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontFamily: 'impact',
        width: '100%',
    }
});

const BottomText = ({
    value,
    scale,
    color,
    isFocused,
    onSelect
}) => (
    <View
        style={{
            width: '100%',
            borderColor: '#65318f',
            borderStyle: 'dashed',
            borderWidth: isFocused ? 5 : 0,
            opacity: isFocused ? 1 : 0.5
        }}
    >
        <TouchableWithoutFeedback
            onPress={() => onSelect('bottom text')}
        >
            <View style={{ paddingVertical: 20 }}><Text
                style={[
                    styles.text,
                    {
                        fontSize: 20,
                        minHeight: 30,
                        color
                    }
                ]}
            >{value || 'Bottom Text'}</Text></View>
        </TouchableWithoutFeedback>
    </View>
);

BottomText.propTypes = {
    value: PropTypes.string.isRequired,
    scale: PropTypes.number.isRequired,
    isFocused: PropTypes.bool
};

BottomText.defaultProps = {
    isFocused: false
};

export default BottomText;
